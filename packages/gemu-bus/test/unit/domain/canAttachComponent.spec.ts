import * as chai from 'chai'
import { canAttachComponent } from '../../../src/domain/canAttachComponent'
import { buildRangedComponent, buildState, buildRange } from '../../helpers/factories'
import { Range } from 'gemu-interfaces'
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('canAttachComponent', () => {
            it('should return true is no state provided', () => {
                const actual = canAttachComponent(null, buildRangedComponent())

                expect(actual).to.be.true
            })

            it('should return true if state has no components array', () => {
                const actual = canAttachComponent({ components: null }, buildRangedComponent())

                expect(actual).to.be.true
            })

            it('should return true if state has no components', () => {
                const actual = canAttachComponent(buildState(), buildRangedComponent())

                expect(actual).to.be.true
            })

            it('should return false if no component provided', () => {
                const actual = canAttachComponent(buildState(), null)

                expect(actual).to.be.false
            })

            const printRanges = (ranges: Range[]): string => 
               ranges.map(x => `${x.start}-${x.finish}`).join(', ')

            const cases = [
                { newRange: buildRange(0, 1), existing: [buildRange(2, 3)], expected: true },
                { newRange: buildRange(2, 3), existing: [buildRange(0, 1)], expected: true },
                { newRange: buildRange(2, 3), existing: [buildRange(0, 1), buildRange(4, 5)], expected: true },
                { newRange: buildRange(0, 2), existing: [buildRange(1, 3)], expected: false },
                { newRange: buildRange(1, 3), existing: [buildRange(0, 2)], expected: false },
                { newRange: buildRange(0, 3), existing: [buildRange(1, 2)], expected: false },
                { newRange: buildRange(1, 2), existing: [buildRange(0, 3)], expected: false },
                { newRange: buildRange(0, 1), existing: [buildRange(1, 2)], expected: false }
            ]
            for (const test of cases) {
                it(`should return ${test.expected} when adding range ${printRanges([test.newRange])} to ranges: ${printRanges(test.existing)}`, () => {
                    const component = buildRangedComponent(test.newRange)
                    const state = {
                        components: test.existing.map(x => buildRangedComponent(x))
                    }

                    const actual = canAttachComponent(state, component)

                    expect(actual).to.be.equal(test.expected)
                })
            }
        })
    })
})
