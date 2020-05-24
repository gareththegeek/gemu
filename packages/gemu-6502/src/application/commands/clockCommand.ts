import Bus from 'gemu-interfaces/dist/Bus'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import Command from 'gemu-interfaces/src/Command'
import { buildInitialiseEvent } from '../../domain/events/buildInitialiseEvent'
import { buildWaitCycleEvent } from '../../domain/events/buildWaitCycleEvent'
import { buildNmiInterruptEvent } from '../../domain/events/buildNmiInterruptEvent'
import { buildIrqInterruptEvent } from '../../domain/events/buildIrqInterruptEvent'
import { buildOperationEvent } from '../../domain/events/buildOperationEvent'

const clockCommand = (bus: Bus, store: Store<State>): Command =>
    () => {
        const state = store.read()

        if (state.cycles !== 0) {
            store.write(buildWaitCycleEvent(state))
            return
        }
    
        if (!state.initialised) {
            store.write(buildInitialiseEvent(bus))
            return
        }
    
        if (state.nmi) {
            store.write(buildNmiInterruptEvent(state, bus))
            return
        }
    
        if (state.irq) {
            store.write(buildIrqInterruptEvent(state, bus))
            return
        }

        store.write(buildOperationEvent(state, bus))
    }

export default clockCommand
