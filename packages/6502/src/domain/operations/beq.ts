import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import { buildBranchEvent } from '../events/buildBranchEvent'

const beq = (state: State, _: Bus, parameter: number): Event =>
    buildBranchEvent(state, parameter, state.status.zero)

export default beq
