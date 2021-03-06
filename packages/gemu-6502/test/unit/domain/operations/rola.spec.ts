import rola from '../../../../src/domain/operations/rola'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('rola', () => {
            it('should shift data left one bit with carry flag going into low bit and lost bit going into carry flag', () => {
                const actual = testOperation(rola, {}, { carry: true }, 0xd5)

                expect(actual).to.containSubset({
                    a: 0xab,
                    status: {
                        negative: true,
                        zero: false,
                        carry: true
                    }
                })
            })
        })
    })
})
