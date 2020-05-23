import clc from '../../../../src/domain/operations/clc'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('clc', () => {
            it('should clear carry flag without affecting other state', () => {
                const actual = testOperation(clc, {}, { carry: true }, 0x00)

                expect(actual).to.containSubset({
                    status: {
                        carry: false
                    }
                })
            })
        })
    })
})
