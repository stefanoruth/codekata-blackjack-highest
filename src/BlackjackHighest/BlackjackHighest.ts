type CardName =
    | 'ace'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'jack'
    | 'queen'
    | 'king'

interface Card {
    name: CardName
    value: number
    rank: number
}

const aceCard: Card = { name: 'ace', value: 1, rank: 1 }

const availableCards: Card[] = [
    aceCard,
    { name: 'two', value: 2, rank: 2 },
    { name: 'three', value: 3, rank: 3 },
    { name: 'four', value: 4, rank: 4 },
    { name: 'five', value: 5, rank: 5 },
    { name: 'six', value: 6, rank: 6 },
    { name: 'seven', value: 7, rank: 7 },
    { name: 'eight', value: 8, rank: 8 },
    { name: 'nine', value: 9, rank: 9 },
    { name: 'ten', value: 10, rank: 10 },
    { name: 'jack', value: 10, rank: 11 },
    { name: 'queen', value: 10, rank: 12 },
    { name: 'king', value: 10, rank: 13 },
]

export function blackjackHighest(dealedCards: string[]) {
    let cards = dealedCards.map(cardName => {
        const card = availableCards.find(card => card.name === cardName)

        if (!card) {
            throw new Error(`Unknown card: "${cardName}"`)
        }

        return card
    })

    let handValue = cards.reduce((total, card) => total + card.value, 0)

    let highestCard = cards.reduce<Card | null>((highestCard, card) => {
        if (!highestCard) {
            return card
        }

        if (card.rank > highestCard.rank) {
            return card
        }

        return highestCard
    }, null)

    if (!highestCard) {
        throw new Error(`Unknown highest card`)
    }

    const acesWasDealed = dealedCards.includes(aceCard.name)

    if (acesWasDealed && handValue <= 11) {
        handValue += 10
        highestCard = aceCard
    }

    if (handValue > 21) {
        return `above ${highestCard.name}`
    } else if (handValue === 21) {
        return `blackjack ${highestCard.name}`
    } else {
        return `below ${highestCard.name}`
    }
}
