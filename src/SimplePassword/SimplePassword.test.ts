import { describe, expect, test } from 'vitest'
import { simplePassword } from './SimplePassword'

describe('SimplePassword', () => {
    test('Play cards', () => {
        expect(simplePassword('abc')).toBeFalsy()
        expect(simplePassword('apple!M7')).toBeTruthy()
        expect(simplePassword('passwordpasswordpassword')).toBeFalsy()
        expect(simplePassword('123456A+')).toBeTruthy()
        expect(simplePassword('dogHOUSE4!MMM')).toBeTruthy()
        expect(simplePassword('aa1_A')).toBeFalsy()
        expect(simplePassword('!!!!!!+++++++++AMAMAM9')).toBeTruthy()
        expect(simplePassword('turkey90AAA')).toBeTruthy()
        expect(simplePassword('passWord123!!!!')).toBeFalsy()
    })
})
