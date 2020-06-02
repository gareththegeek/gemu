import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import { buildInterruptEvent } from '../events/buildInterruptEvent'
import { BRK_VECTOR, B_BRK } from '../constants'

const brk = (state: State, bus: Bus, _: number): Event<State> => {
    const interruptEvent = buildInterruptEvent(state, bus, BRK_VECTOR, B_BRK)
    return {
        ...interruptEvent,
        status: {
            ...interruptEvent,
            break: true
        }
    }
}

export default brk
