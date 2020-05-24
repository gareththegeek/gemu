import nop from '../../../../src/domain/operations/nop'
import { build6502State, buildBus } from '../../../helpers/factories'
import { expect } from 'chai'

describe('Unit', () => {
    describe('6502', () => {
        describe('nop', () => {
            it('should not modify state', () => {
                const previous = build6502State()

                const uut = nop
                const actual = uut(previous, buildBus(), 0x00)

                expect(actual).to.deep.equal({})
            })
        })
    })
})
