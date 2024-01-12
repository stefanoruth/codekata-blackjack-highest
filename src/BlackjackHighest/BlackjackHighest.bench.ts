import { bench, describe } from 'vitest'
import { blackjackHighest } from './BlackjackHighest'

describe('BlackjackHighest', () => {
    bench('below king', () => {
        blackjackHighest(['king', 'ace', 'two'])
    })
})
