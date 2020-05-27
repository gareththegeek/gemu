import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'
import * as getComponentAtUnit from '../../../../src/domain/getComponentAt'
import * as writeToComponentUnit from '../../../../src/domain/writeToComponent'
import { buildState, buildStore, buildRangedComponent } from '../../../helpers/factories'
import { writeCommand } from '../../../../src/application/commands/writeCommand'
chai.use(sinonChai)
const expect = chai.expect

describe('Bus', () => {
    describe('Unit', () => {
        describe('writeCommand', () => {
            let sandbox: SinonSandbox
            let getComponentAt: SinonStub
            let writeToComponent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                getComponentAt = sandbox.stub(getComponentAtUnit, 'getComponentAt')
                writeToComponent = sandbox.stub(writeToComponentUnit, 'writeToComponent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should not write to component if cannot get component at requested address', () => {
                const address = 0
                const store = buildStore()
                const state = buildState()
                store.read.returns(state)

                getComponentAt.returns(undefined)

                const uut = writeCommand(store)
                uut(address, 0)

                expect(getComponentAt).to.have.been.calledWith(state, address)
                expect(writeToComponent).not.to.have.been.called
            })

            it('should write specified value to component at specified address if component found at that address', () => {
                const expected = {
                    address: 5,
                    value: 8,
                    rangedComponent: buildRangedComponent()
                }
                const store = buildStore()

                getComponentAt.returns(expected.rangedComponent)

                const uut = writeCommand(store)
                uut(expected.address, expected.value)

                expect(writeToComponent).to.have.been.calledWith(
                    expected.rangedComponent,
                    expected.address,
                    expected.value)
            })
        })
    })
})
