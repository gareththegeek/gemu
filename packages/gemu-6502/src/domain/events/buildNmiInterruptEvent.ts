import State from '../State'
import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_NMI, NMI_VECTOR } from '../constants'

export const buildNmiInterruptEvent = (state: State, bus: Bus): Event<State> =>
    buildInterruptEvent(state, bus, NMI_VECTOR, B_NMI)
