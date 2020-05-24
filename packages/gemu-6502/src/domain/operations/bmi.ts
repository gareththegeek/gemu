import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import { buildBranchEvent } from '../events/buildBranchEvent'

const bmi = (state: State, _: Bus, parameter: number): Event<State> =>
    buildBranchEvent(state, parameter, state.status.negative)

export default bmi
