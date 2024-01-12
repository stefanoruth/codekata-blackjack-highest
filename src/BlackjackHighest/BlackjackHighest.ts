export function blackjackHighest(cards: string[]) {
    const numbers = convertStringsToNumbers(cards)
    let myNumber = numbers.reduce((acc, current) => {
        return (acc = acc + current.number)
    }, 0)

    let highestCard = numbers.reduce(function (prev, current) {
        if (prev.number === current.number && current.sortNumber && prev.sortNumber) {
            return prev.sortNumber > current.sortNumber ? prev : current
        }
        return prev && prev.number > current.number ? prev : current
    })

    const title = cards.reduce((acc, card) => {
        if (card === 'ace') {
            if (myNumber + 11 > 21) {
                myNumber = myNumber + 1
                acc = `below ${highestCard.value}`
            } else {
                highestCard = {
                    number: 11,
                    value: 'ace',
                }
                myNumber = myNumber + 11
            }
        }
        if (myNumber === 21) {
            return `blackjack ${highestCard.value}`
        }
        if (myNumber > 21) {
            return `above ${highestCard.value}`
        } else {
            return `below ${highestCard.value}`
        }
    }, '')
    return title
}

const convertStringsToNumbers = (cards: string[]) => {
    const numbers = cards.reduce<
        {
            number: number
            value: string
            sortNumber?: number
        }[]
    >((acc, card) => {
        if (card === 'ace') {
            return acc
        }
        switch (card) {
            case 'one': {
                acc.push({ number: 1, value: card })
                break
            }
            case 'two': {
                acc.push({ number: 2, value: card })
                break
            }
            case 'three': {
                acc.push({ number: 3, value: card })
                break
            }
            case 'four': {
                acc.push({ number: 4, value: card })
                break
            }
            case 'five': {
                acc.push({ number: 5, value: card })
                break
            }
            case 'six': {
                acc.push({ number: 6, value: card })
                break
            }
            case 'seven': {
                acc.push({ number: 7, value: card })
                break
            }
            case 'eight': {
                acc.push({ number: 8, value: card })
                break
            }
            case 'nine': {
                acc.push({ number: 9, value: card })
                break
            }
            case 'ten': {
                acc.push({ number: 10, value: card, sortNumber: 1 })
                break
            }
            case 'jack': {
                acc.push({ number: 10, value: card, sortNumber: 2 })
                break
            }
            case 'queen': {
                acc.push({ number: 10, value: card, sortNumber: 3 })
                break
            }
            case 'king': {
                acc.push({ number: 10, value: card, sortNumber: 4 })
                break
            }
        }
        return acc
    }, [])

    return numbers
}
