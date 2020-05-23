import State from '../State'
import Event from 'gemu-persistance/dist/Event'
import Bus from '../../infrastructure/Bus'
import { buildInterruptEvent } from './buildInterruptEvent'
import { B_IRQ, IRQ_VECTOR } from '../constants'

export const buildIrqInterruptEvent = (state: State, bus: Bus): Event<State> =>
    buildInterruptEvent(state, bus, IRQ_VECTOR, B_IRQ)
