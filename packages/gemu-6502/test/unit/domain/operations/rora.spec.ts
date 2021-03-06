import rora from '../../../../src/domain/operations/rora'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('rora', () => {
            it('should shift data right one bit with carry flag going into high bit and lost bit going into carry flag', () => {
                const actual = testOperation(rora, {}, { carry: true }, 0x55)

                expect(actual).to.containSubset({
                    a: 0xaa,
                    status: {
                        negative: true,
                        zero: false,
                        carry: true
                    }
                })
            })

            it('should shift data right one bit with unset carry flag going into high bit as zero', () => {
                const actual = testOperation(rora, {}, { carry: false }, 0x54)

                expect(actual).to.containSubset({
                    a: 0x2a,
                    status: {
                        negative: false,
                        zero: false,
                        carry: false
                    }
                })
            })
        })
    })
})
