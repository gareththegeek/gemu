import { SinonStub, SinonSandbox, SinonStubbedInstance, createSandbox } from 'sinon'
import * as chai from 'chai'
import * as sinonChai from 'sinon-chai'
import clockCommand from '../../../../src/application/commands/clockCommand'
import * as buildWaitCycleEventUnit from '../../../../src/domain/events/buildWaitCycleEvent'
import * as buildInitialiseEventUnit from '../../../../src/domain/events/buildInitialiseEvent'
import * as buildNmiInterruptEventUnit from '../../../../src/domain/events/buildNmiInterruptEvent'
import * as buildIrqInterruptEventUnit from '../../../../src/domain/events/buildIrqInterruptEvent'
import * as buildOperationEventUnit from '../../../../src/domain/events/buildOperationEvent'
import { Store } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import State from '../../../../src/domain/State'
import { build6502State, buildBus, buildStore } from '../../../helpers/factories'
const expect = chai.expect
chai.use(sinonChai)

describe('Unit', () => {
    describe('6502', () => {
        describe('clockCommand', () => {
            let sandbox: SinonSandbox

            let bus: SinonStubbedInstance<Bus>
            let store: SinonStubbedInstance<Store<State>>

            let buildWaitCycleEvent: SinonStub
            let buildInitialiseEvent: SinonStub
            let buildNmiInterruptEvent: SinonStub
            let buildIrqInterruptEvent: SinonStub
            let buildOperationEvent: SinonStub

            beforeEach(() => {
                sandbox = createSandbox()
                bus = buildBus()
                store = buildStore()
                buildWaitCycleEvent = sandbox.stub(buildWaitCycleEventUnit, 'buildWaitCycleEvent')
                buildInitialiseEvent = sandbox.stub(buildInitialiseEventUnit, 'buildInitialiseEvent')
                buildNmiInterruptEvent = sandbox.stub(buildNmiInterruptEventUnit, 'buildNmiInterruptEvent')
                buildIrqInterruptEvent = sandbox.stub(buildIrqInterruptEventUnit, 'buildIrqInterruptEvent')
                buildOperationEvent = sandbox.stub(buildOperationEventUnit, 'buildOperationEvent')
            })

            afterEach(() => {
                sandbox.restore()
            })

            it('should write a wait cycle event to the store if current cycle count is non-zero', () => {
                const state = build6502State()
                state.cycles = 1
                state.initialised = false
                state.nmi = true
                state.irq = true
                store.read.returns(state)

                const expected = { foo: 'bar' }
                buildWaitCycleEvent.returns(expected)

                const uut = clockCommand(bus, store)
                uut()

                expect(store.write).to.have.been.calledWith(expected)
                expect(buildWaitCycleEvent).to.have.been.called
                expect(buildInitialiseEvent).not.to.have.been.called
                expect(buildNmiInterruptEvent).not.to.have.been.called
                expect(buildIrqInterruptEvent).not.to.have.been.called
                expect(buildOperationEvent).not.to.have.been.called
            })

            it('should write an initialise event to the store if not yet initialised', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = false
                state.nmi = true
                state.irq = true
                store.read.returns(state)

                const expected = { foo: 'bar' }
                buildInitialiseEvent.returns(expected)

                const uut = clockCommand(bus, store)
                uut()

                expect(store.write).to.have.been.calledWith(expected)
                expect(buildWaitCycleEvent).not.to.have.been.called
                expect(buildInitialiseEvent).to.have.been.called
                expect(buildNmiInterruptEvent).not.to.have.been.called
                expect(buildIrqInterruptEvent).not.to.have.been.called
                expect(buildOperationEvent).not.to.have.been.called
            })

            it('should write an nmi event to the store if nmi triggered', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = true
                state.irq = true
                store.read.returns(state)

                const expected = { foo: 'bar' }
                buildNmiInterruptEvent.returns(expected)

                const uut = clockCommand(bus, store)
                uut()

                expect(store.write).to.have.been.calledWith(expected)
                expect(buildWaitCycleEvent).not.to.have.been.called
                expect(buildInitialiseEvent).not.to.have.been.called
                expect(buildNmiInterruptEvent).to.have.been.called
                expect(buildIrqInterruptEvent).not.to.have.been.called
                expect(buildOperationEvent).not.to.have.been.called
            })

            it('should write an irq event to the store if irq triggered', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = false
                state.irq = true
                store.read.returns(state)

                const expected = { foo: 'bar' }
                buildIrqInterruptEvent.returns(expected)

                const uut = clockCommand(bus, store)
                uut()

                expect(store.write).to.have.been.calledWith(expected)
                expect(buildWaitCycleEvent).not.to.have.been.called
                expect(buildInitialiseEvent).not.to.have.been.called
                expect(buildNmiInterruptEvent).not.to.have.been.called
                expect(buildIrqInterruptEvent).to.have.been.called
                expect(buildOperationEvent).not.to.have.been.called
            })

            it('should write an operation event to the store if initialised with zero cycle count and no interrupts signalled', () => {
                const state = build6502State()
                state.cycles = 0
                state.initialised = true
                state.nmi = false
                state.irq = false
                store.read.returns(state)

                const expected = { foo: 'bar' }
                buildOperationEvent.returns(expected)

                const uut = clockCommand(bus, store)
                uut()

                expect(store.write).to.have.been.calledWith(expected)
                expect(buildWaitCycleEvent).not.to.have.been.called
                expect(buildInitialiseEvent).not.to.have.been.called
                expect(buildNmiInterruptEvent).not.to.have.been.called
                expect(buildIrqInterruptEvent).not.to.have.been.called
                expect(buildOperationEvent).to.have.been.called
            })
        })
    })
})