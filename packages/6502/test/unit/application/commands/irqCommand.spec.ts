import { SinonStub, SinonSandbox, SinonStubbedInstance, createSandbox } from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import irqCommand from '../../../../src/application/commands/irqCommand'
import * as buildIrqEventUnit from '../../../../src/domain/events/buildIrqEvent'
import Store from '../../../../src/persistance/Store'
import { build6502State } from '../../../helpers/factories'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('irqCommand', () => {
            let sandbox: SinonSandbox
            let buildIrqEvent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                buildIrqEvent = sandbox.stub(buildIrqEventUnit, 'buildIrqEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should build an irq event and write it to the store', () => {
                const expected = { foo: 'bar' }
                buildIrqEvent.returns(expected)

                const store = {
                    read: sandbox.stub(),
                    write: sandbox.stub()
                } as SinonStubbedInstance<Store>

                const state = build6502State()
                state.status.irqDisable = false
                store.read.returns(state)

                const uut = irqCommand(store)
                uut()
                
                expect(store.write as SinonStub).to.have.been.calledWith(expected)
            })

            it('should not write event to the store if irqs are disabled', () => {
                const store = {
                    read: sandbox.stub(),
                    write: sandbox.stub()
                } as SinonStubbedInstance<Store>

                const state = build6502State()
                state.status.irqDisable = true
                store.read.returns(state)

                const uut = irqCommand(store)
                uut()
                
                expect(store.write as SinonStub).not.to.have.been.called
            })
        })
    })
})