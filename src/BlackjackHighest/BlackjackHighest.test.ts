import { describe, expect, test } from 'vitest'
import { BlackjackHighest } from './BlackjackHighest'

describe('BlackjackHighest', () => {
    test('Play cards', () => {
        expect(BlackjackHighest(['king', 'ace', 'two'])).toBe('below king')
        expect(BlackjackHighest(['queen', 'ace', 'ten'])).toBe('blackjack queen')
        expect(BlackjackHighest(['queen', 'ace', 'seven'])).toBe('below queen')
        expect(BlackjackHighest(['five', 'six', 'king'])).toBe('blackjack king')
        expect(BlackjackHighest(['five', 'eight', 'jack'])).toBe('above jack')
        expect(BlackjackHighest(['four', 'four', 'four', 'four', 'four', 'ace'])).toBe('blackjack four')
        expect(BlackjackHighest(['three', 'eight', 'queen'])).toBe('blackjack queen')
        expect(BlackjackHighest(['four', 'seven', 'ace'])).toBe('below seven')
        expect(BlackjackHighest(['jack', 'ace'])).toBe('blackjack ace')
        expect(BlackjackHighest(['two', 'three', 'four', 'five', 'six', 'ace'])).toBe('blackjack six')
    })
})
