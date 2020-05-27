import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildRangedComponent, buildRange } from '../../helpers/factories'
import { readFromComponent } from '../../../src/domain/readFromComponent'
import { SinonStubbedInstance } from 'sinon'
import { Component } from 'gemu-interfaces'
chai.use(sinonChai)
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('readFromComponent', () => {
            it('should read from specified address relative to component\'s range', () => {
                const rangedComponent = buildRangedComponent(buildRange(5, 7))

                readFromComponent(rangedComponent, 6)

                expect(rangedComponent.component.readQuery).to.have.been.calledWith(6 - 5)
            })

            it('should return the result of the component read', () => {
                const rangedComponent = buildRangedComponent()
                const component = rangedComponent.component as SinonStubbedInstance<Component>
                const expected = 42
                component.readQuery.returns(expected)

                const actual = readFromComponent(rangedComponent, 1)

                expect(actual).to.be.equal(expected)
            })
        })
    })
})