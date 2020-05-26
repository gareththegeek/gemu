import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildRangedComponent, buildRange } from '../../helpers/factories'
import { match } from 'sinon'
import { writeToComponent } from '../../../src/domain/writeToComponent'
chai.use(sinonChai)
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('writeToComponent', () => {
            it('should write to specified address relative to component\'s range', () => {
                const rangedComponent = buildRangedComponent(buildRange(5, 7))

                writeToComponent(rangedComponent, 6, 0)

                expect(rangedComponent.component.writeCommand).to.have.been.calledWith(6 - 5, match.any)
            })

            it('should write value to the component', () => {
                const rangedComponent = buildRangedComponent()
                const expected = 42
                
                writeToComponent(rangedComponent, 0, expected)

                expect(rangedComponent.component.writeCommand).to.have.been.calledWith(match.any, expected)
            })
        })
    })
})