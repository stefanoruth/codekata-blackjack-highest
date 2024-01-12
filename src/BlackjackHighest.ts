const availableCards: Record<string, { value: number; rank: number }> = {
    ace: { value: 1, rank: 1 },
    two: { value: 2, rank: 2 },
    three: { value: 3, rank: 3 },
    four: { value: 4, rank: 4 },
    five: { value: 5, rank: 5 },
    six: { value: 6, rank: 6 },
    seven: { value: 7, rank: 7 },
    eight: { value: 8, rank: 8 },
    nine: { value: 9, rank: 9 },
    ten: { value: 10, rank: 10 },
    jack: { value: 10, rank: 11 },
    queen: { value: 10, rank: 12 },
    king: { value: 10, rank: 13 },
}

export function blackjackHighest(dealedCards: string[]) {
    let handValue = 0
    let highestRank = 0
    let highestCard: string | undefined
    let usedAce = false

    for (const dealedCard of dealedCards) {
        const card = availableCards[dealedCard]

        handValue += card.value

        if (highestRank < card.rank) {
            highestRank = card.rank
            highestCard = dealedCard
        }

        if (dealedCard === 'ace') {
            usedAce = true
        }
    }

    if (usedAce && handValue <= 11) {
        handValue += 10
        highestCard = 'ace'
    }

    if (handValue > 21) {
        return `above ${highestCard}`
    } else if (handValue === 21) {
        return `blackjack ${highestCard}`
    } else {
        return `below ${highestCard}`
    }
}
