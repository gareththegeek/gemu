import bpl from '../../../../src/domain/operations/bpl'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('bpl', () => {
            it('should add parameter to program counter and increment cycles if negative status flag is not set', () => {
                const actual = testOperation(bpl, { cycles: 5, pc: 0x1000 }, { negative: false }, 0x06)

                expect(actual).to.containSubset({
                    pc: 0x1006,
                    cycles: 6
                })
            })

            it('should not add parameter to program counter or increment cycles if negative status flag is set', () => {
                const actual = testOperation(bpl, { cycles: 5, pc: 0x1000 }, { negative: true }, 0x06)

                expect(actual).to.containSubset({
                    pc: 0x1000,
                    cycles: 5
                })
            })

            it('should increment cycles by 2 if negative flag not set and page boundary crossed', () => {
                const actual = testOperation(bpl, { cycles: 5, pc: 0x10ff }, { negative: false }, 0x01)

                expect(actual.cycles).to.be.equal(7)
            })
        })
    })
})
