import asla from '../../../../src/domain/operations/asla'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('asla', () => {
            it('should shift data left one bit with lost bit going into carry flag', () => {
                const actual = testOperation(asla, {}, {}, 0xaa)

                expect(actual).to.containSubset({
                    a: 0x54,
                    status: {
                        negative: false,
                        zero: false,
                        carry: true
                    }
                })
            })
        })
    })
})
