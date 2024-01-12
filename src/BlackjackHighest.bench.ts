import { bench, describe } from 'vitest'
import { blackjackHighest } from './BlackjackHighest'

describe('BlackjackHighest', () => {
    bench('Solution', () => {
        blackjackHighest(['king', 'ace', 'two'])
    })
})
