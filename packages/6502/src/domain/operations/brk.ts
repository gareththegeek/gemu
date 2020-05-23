import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import { buildInterruptEvent } from '../events/buildInterruptEvent'
import { BRK_VECTOR, B_BRK } from '../constants'

const brk = (state: State, bus: Bus, _: number): Event =>
    buildInterruptEvent(state, bus, BRK_VECTOR, B_BRK)

export default brk
