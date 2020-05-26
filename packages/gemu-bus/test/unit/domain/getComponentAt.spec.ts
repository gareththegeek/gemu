import * as chai from 'chai'
import { getComponentAt } from '../../../src/domain/getComponentAt'
import State from '../../../src/domain/State'
import { buildRangedComponent, buildRange } from '../../helpers/factories'
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('getComponentAt', () => {
            //const buildState = (): State => {}

            it('should return undefined if no existing ranges', () => {
                const actual = getComponentAt({ components: [] }, 0)

                expect(actual).to.be.undefined
            })

            it('should return undefined if no matching range found', () => {
                const existing = buildRangedComponent(buildRange(0, 1))
                const actual = getComponentAt({ components: [existing] }, 2)

                expect(actual).to.be.undefined
            })
            
            it('should return component if its range starts at requested address', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [expected] }, 0)

                expect(actual).to.be.deep.equal(expected)
            })

            it('should return component if its range finishes at requested address', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [ expected] }, 2)

                expect(actual).to.be.deep.equal(expected)
            })

            it('should return component if requested address inside its range', () => {
                const expected = buildRangedComponent(buildRange(0, 2))
                const actual = getComponentAt({ components: [expected] }, 1)

                expect(actual).to.be.deep.equal(expected)
            })

            it('should return matching component', () => {
                const expected = buildRangedComponent(buildRange(3, 6))
                const unexpected1 = buildRangedComponent(buildRange(0, 2))
                const unexpected2 = buildRangedComponent(buildRange(7, 8))
                const actual = getComponentAt({ components: [unexpected1, unexpected2, expected] }, 4)

                expect(actual).to.be.deep.equal(expected)
            })
        })
    })
})
