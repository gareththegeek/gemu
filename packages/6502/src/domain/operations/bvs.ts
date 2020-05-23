import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import { buildBranchEvent } from '../events/buildBranchEvent'

const bvs = (state: State, _: Bus, parameter: number): Event =>
    buildBranchEvent(state, parameter, state.status.overflow)

export default bvs
