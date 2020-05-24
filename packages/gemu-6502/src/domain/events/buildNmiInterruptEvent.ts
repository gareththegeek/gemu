import State from '../State'
import Event from 'gemu-interfaces/dist/Event'
import Bus from 'gemu-interfaces/dist/Bus'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_NMI, NMI_VECTOR } from '../constants'

export const buildNmiInterruptEvent = (state: State, bus: Bus): Event<State> =>
    buildInterruptEvent(state, bus, NMI_VECTOR, B_NMI)
