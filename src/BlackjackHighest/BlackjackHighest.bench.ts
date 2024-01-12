import { bench, describe } from 'vitest'
import { blackjackHighest } from './BlackjackHighest'
import { blackjackHighestNew } from './BlackjackHighest.new'

describe('BlackjackHighest', () => {
    bench('blackjack highest old', () => {
        blackjackHighest(['king', 'ace', 'two'])
        blackjackHighest(['king', 'ace', 'two'])
        blackjackHighest(['queen', 'ace', 'ten'])
        blackjackHighest(['queen', 'ace', 'seven'])
        blackjackHighest(['five', 'six', 'king'])
        blackjackHighest(['five', 'eight', 'jack'])
        blackjackHighest(['four', 'four', 'four', 'four', 'four', 'ace'])
        blackjackHighest(['three', 'eight', 'queen'])
        blackjackHighest(['four', 'seven', 'ace'])
        blackjackHighest(['jack', 'ace'])
        blackjackHighest(['two', 'three', 'four', 'five', 'six', 'ace'])
        blackjackHighest(['ace', 'ace', 'four', 'five'])
    })
    bench('blackjack highest new', () => {
        blackjackHighestNew(['king', 'ace', 'two'])
        blackjackHighestNew(['king', 'ace', 'two'])
        blackjackHighestNew(['queen', 'ace', 'ten'])
        blackjackHighestNew(['queen', 'ace', 'seven'])
        blackjackHighestNew(['five', 'six', 'king'])
        blackjackHighestNew(['five', 'eight', 'jack'])
        blackjackHighestNew(['four', 'four', 'four', 'four', 'four', 'ace'])
        blackjackHighestNew(['three', 'eight', 'queen'])
        blackjackHighestNew(['four', 'seven', 'ace'])
        blackjackHighestNew(['jack', 'ace'])
        blackjackHighestNew(['two', 'three', 'four', 'five', 'six', 'ace'])
        blackjackHighestNew(['ace', 'ace', 'four', 'five'])
    })
})
