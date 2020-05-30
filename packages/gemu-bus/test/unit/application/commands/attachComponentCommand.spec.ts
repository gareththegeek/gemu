import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { buildStore, buildState, buildRangedComponent } from '../../../helpers/factories'
import { attachComponentCommand } from '../../../../src/application/commands/attachComponentCommand'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as canAttachComponentUnit from '../../../../src/domain/canAttachComponent'
chai.use(sinonChai)
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('attachComponentCommand', () => {
            let sandbox: SinonSandbox
            let canAttachComponent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                canAttachComponent = sandbox.stub(canAttachComponentUnit, 'canAttachComponent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should not write to store if cannot attach specified component', () => {
                const rangedComponent = buildRangedComponent()
                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                canAttachComponent.returns(false)

                const uut = attachComponentCommand(store)
                uut(rangedComponent)

                expect(canAttachComponent).to.have.been.calledWith(state, rangedComponent)
                expect(store.write).not.to.have.been.called
            })

            it('should write component to store if it can be attached', () => {
                const expected = buildRangedComponent()
                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                canAttachComponent.returns(true)

                const uut = attachComponentCommand(store)
                uut(expected)

                expect(store.write).to.have.been.calledWith({
                    components: [expected]
                })
            })
        })
    })
})
