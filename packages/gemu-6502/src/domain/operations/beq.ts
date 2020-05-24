import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import { buildBranchEvent } from '../events/buildBranchEvent'

const beq = (state: State, _: Bus, parameter: number): Event<State> =>
    buildBranchEvent(state, parameter, state.status.zero)

export default beq
