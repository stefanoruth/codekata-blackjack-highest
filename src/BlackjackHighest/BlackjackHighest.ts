
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
    aceHigh?: boolean
    highestCard: Card | null
    highestValue: number | null,
    valid?: boolean;
}

export function blackjackHighest(cards: Card[]) {
    let branchA: Branch = {sum: 0, highestCard: null, highestValue: null};
    let branchB: Branch = {sum: 0, highestCard: null, highestValue: null};
    for(const currentCard of cards)
    {
        const cardValue = cardDefs[currentCard];
        const secondBranch = branchB.aceHigh ? cardValue[0] :  cardValue[1] ?? cardValue[0]

        branchA.sum += cardValue[0];
        branchB.sum += secondBranch;

        if(!branchA.highestValue || branchA.highestValue < cardValue[0])
        {
            branchA.highestCard = currentCard;
            branchA.highestValue = cardValue[0];
        }

        if(!branchB.highestValue || branchB.highestValue < secondBranch)
        {
            branchB.highestCard = currentCard;
            branchB.highestValue = secondBranch;
        }

        branchB.aceHigh = branchB.aceHigh || currentCard === 'ace';
    }

    branchA.valid = branchA.sum <= 21;
    branchB.valid = branchB.sum <= 21;

    let pickedBranch = branchA;
    if(!branchA.valid && branchB.valid)
    {
        pickedBranch = branchB;
    }else if(branchA.valid && branchB.valid)
    {
        if(branchB.sum > branchA.sum)
        {
            pickedBranch = branchB;
        }
    }

    let prefix = 'below';
    if(!pickedBranch.valid)
    {
        prefix = 'above'
    }else if(pickedBranch.sum === 21)
    {
        prefix = 'blackjack'
    }

    return `${prefix} ${pickedBranch.highestCard}`
}
