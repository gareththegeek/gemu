import cpx from '../../../../src/domain/operations/cpx'
import { testOperation } from '../../../helpers/6502'
import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
chai.use(chaiSubset)
const expect = chai.expect

describe('Unit', () => {
    describe('6502', () => {
        describe('cpx', () => {
            it('should set the zero and carry flags and clear the negative flag if the x register and parameter are equal', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { zero: false, carry: false, negative: true }, 0x53)

                expect(actual).to.containSubset({
                    status: {
                        zero: true,
                        carry: true,
                        negative: false
                    }
                })
            })

            it('should clear the zero flag if the x register and parameter are not equal', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { zero: true }, 0x52)

                expect(actual).to.containSubset({
                    status: {
                        zero: false
                    }
                })
            })

            it('should set the carry flag if the x register is greater than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { carry: false }, 0x52)

                expect(actual).to.containSubset({
                    status: {
                        carry: true
                    }
                })
            })

            it('should clear the carry flag if the x register is less than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { carry: true }, 0x54)

                expect(actual).to.containSubset({
                    status: {
                        carry: false
                    }
                })
            })

            it('should set the negative flag if the x register is less than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x53 }, { negative: false }, 0x54)

                expect(actual).to.containSubset({
                    status: {
                        negative: true
                    }
                })
            })

            it('should clear the negative flag if the x register is greater than the parameter', () => {
                const actual = testOperation(cpx, { x: 0x55 }, { negative: true }, 0x54)

                expect(actual).to.containSubset({
                    status: {
                        negative: false
                    }
                })
            })
        })
    })
})
