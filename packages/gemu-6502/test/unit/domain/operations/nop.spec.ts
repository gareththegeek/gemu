import nop from '../../../../src/domain/operations/nop'
import { build6502State } from '../../../helpers/factories'
import Bus from '../../../../src/infrastructure/Bus'
import { expect } from 'chai'

describe('Unit', () => {
    describe('6502', () => {
        describe('nop', () => {
            it('should not modify state', () => {
                const previous = build6502State()

                const uut = nop
                const actual = uut(previous, {} as Bus, 0x00)

                expect(actual).to.deep.equal({})
            })
        })
    })
})
