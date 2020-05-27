import State from '../State'
import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_IRQ, IRQ_VECTOR } from '../constants'

export const buildIrqInterruptEvent = (state: State, bus: Bus): Event<State> =>
    buildInterruptEvent(state, bus, IRQ_VECTOR, B_IRQ)
