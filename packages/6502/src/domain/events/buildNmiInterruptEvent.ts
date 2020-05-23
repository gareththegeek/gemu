import State from '../State'
import Event from '../Event'
import Bus from '../../infrastructure/Bus'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_NMI, NMI_VECTOR } from '../constants'

export const buildNmiInterruptEvent = (state: State, bus: Bus): Event =>
    buildInterruptEvent(state, bus, NMI_VECTOR, B_NMI)
