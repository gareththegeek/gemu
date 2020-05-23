import bvc from '../../../../src/domain/operations/bvc'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('bvc', () => {
            it('should add parameter to program counter and increment cycles if overflow status flag is not set', () => {
                const actual = testOperation(bvc, { cycles: 5, pc: 0x1000 }, { overflow: false }, 0x06)

                expect(actual).to.containSubset({
                    pc: 0x1006,
                    cycles: 6
                })
            })

            it('should not add parameter to program counter or increment cycles if overflow status flag is set', () => {
                const actual = testOperation(bvc, { cycles: 5, pc: 0x1000 }, { overflow: true }, 0x06)

                expect(actual).to.containSubset({
                    pc: 0x1000,
                    cycles: 5
                })
            })

            it('should increment cycles by 2 if overflow flag not set and page boundary crossed', () => {
                const actual = testOperation(bvc, { cycles: 5, pc: 0x10ff }, { overflow: false }, 0x01)

                expect(actual.cycles).to.be.equal(7)
            })
        })
    })
})
