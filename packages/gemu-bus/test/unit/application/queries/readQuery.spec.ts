import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as getComponentAtUnit from '../../../../src/domain/getComponentAt'
import * as readFromComponentUnit from '../../../../src/domain/readFromComponent'
import { buildState, buildStore, buildRangedComponent } from '../../../helpers/factories'
import { readQuery } from '../../../../src/application/queries/readQuery'
chai.use(sinonChai)
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('readQuery', () => {
            let sandbox: SinonSandbox
            let getComponentAt: SinonStub
            let readFromComponent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                getComponentAt = sandbox.stub(getComponentAtUnit, 'getComponentAt')
                readFromComponent = sandbox.stub(readFromComponentUnit, 'readFromComponent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should not read from component if cannot get component at requested address', () => {
                const address = 0
                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                getComponentAt.returns(undefined)

                const uut = readQuery(store)
                uut(address, 0)

                expect(getComponentAt).to.have.been.calledWith(state, address)
                expect(readFromComponent).not.to.have.been.called
            })

            it('should read and return value from component at specified address if component found at that address', () => {
                const expected = {
                    address: 5,
                    value: 8,
                    rangedComponent: buildRangedComponent()
                }
                const store = buildStore()

                readFromComponent.returns(expected.value)
                getComponentAt.returns(expected.rangedComponent)

                const uut = readQuery(store)
                const actual = uut(expected.address)

                expect(readFromComponent).to.have.been.calledWith(
                    expected.rangedComponent,
                    expected.address)
                expect(actual).to.deep.equal(expected.value)
            })
        })
    })
})
