import { bench, describe } from 'vitest'
import { blackjackHighest } from './BlackjackHighest'
import { blackjackHighestOld } from './BlackjackHighestOld'


describe('BlackjackHighest', () => {
    bench('old', () => {
        blackjackHighestOld(['king', 'ace', 'two'])
        // blackjackHighestOld(['king', 'ace', 'two']);
        // blackjackHighestOld(['queen', 'ace', 'ten']);
        // blackjackHighestOld(['queen', 'ace', 'seven']);
        // blackjackHighestOld(['ace', 'ace', 'four', 'five']);
        // blackjackHighestOld(['five', 'six', 'king']);
        // blackjackHighestOld(['five', 'eight', 'jack']);
        // blackjackHighestOld(['four', 'four', 'four', 'four', 'four', 'ace']);
        // blackjackHighestOld(['three', 'eight', 'queen']);
        // blackjackHighestOld(['four', 'seven', 'ace']);
        // blackjackHighestOld(['jack', 'ace']);
        // blackjackHighestOld(['two', 'three', 'four', 'five', 'six', 'ace']);
        // blackjackHighestOld(['ace', 'ace', 'four', 'five']);
    })
    bench('new', () => {
        blackjackHighest(['king', 'ace', 'two'])
        // blackjackHighest(['king', 'ace', 'two']);
        // blackjackHighest(['queen', 'ace', 'ten']);
        // blackjackHighest(['queen', 'ace', 'seven']);
        // blackjackHighest(['ace', 'ace', 'four', 'five']);
        // blackjackHighest(['five', 'six', 'king']);
        // blackjackHighest(['five', 'eight', 'jack']);
        // blackjackHighest(['four', 'four', 'four', 'four', 'four', 'ace']);
        // blackjackHighest(['three', 'eight', 'queen']);
        // blackjackHighest(['four', 'seven', 'ace']);
        // blackjackHighest(['jack', 'ace']);
        // blackjackHighest(['two', 'three', 'four', 'five', 'six', 'ace']);
        // blackjackHighest(['ace', 'ace', 'four', 'five']);
    })
})
