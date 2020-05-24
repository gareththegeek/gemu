import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import { buildInterruptEvent } from '../events/buildInterruptEvent'
import { BRK_VECTOR, B_BRK } from '../constants'

const brk = (state: State, bus: Bus, _: number): Event<State> =>
    buildInterruptEvent(state, bus, BRK_VECTOR, B_BRK)

export default brk
