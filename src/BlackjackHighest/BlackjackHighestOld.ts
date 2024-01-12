
const cardDefs = {
    two: [2],
    three: [3],
    four: [4],
    five: [5],
    six: [6],
    seven: [7],
    eight: [8],
    nine: [9],
    ten: [10],
    jack: [10],
    queen: [10],
    king: [10],
    ace: [1, 11],
}

type Card = keyof typeof cardDefs;

interface Branch {
    sum: number,
    aceHigh?: true
}

export function blackjackHighestOld(cards: Card[]) {
    const branches = cards.reduce<[Branch, Branch]>((branches, currentCard) => {
        const cardValue = cardDefs[currentCard];
        const secondBranch = branches[1].aceHigh ? cardValue[0] :  cardValue[1] ?? cardValue[0]

        branches[0].sum += cardValue[0];
        branches[1].sum += secondBranch;

        if(!branches[1].aceHigh && currentCard === 'ace')
        {
            branches[1].aceHigh = true;
        }

        return branches;
    }, [{sum: 0}, {sum: 0}]);

    const pickedBranch = branches.sort((a, b) => {
        const aValid = a.sum <= 21;
        const bValid = b.sum <= 21;
        
        if(aValid && !bValid)
        {
            return -1;
        }else if(!aValid && bValid)
        {
            return 1;
        }else if(aValid && bValid)
        {
            return b.sum - a.sum;
        }
        
        return 0;
    })[0]
    
    if(!pickedBranch)
    {
        throw new Error("Branch not found!")
    }

    const sortedCards = cards.sort((a, b) => {
        const aKey = a === 'ace' && pickedBranch.aceHigh ? 1 : 0;
        const bKey = b === 'ace' && pickedBranch.aceHigh ? 1 : 0;
        
        const aValue = cardDefs[a][aKey] || 0;
        const bValue = cardDefs[b][bKey] || 0;

        return bValue - aValue;
    })

    let prefix = 'below';
    if(pickedBranch.sum > 21)
    {
        prefix = 'above'
    }else if(pickedBranch.sum === 21)
    {
        prefix = 'blackjack'
    }

    return `${prefix} ${sortedCards[0]}`
}
