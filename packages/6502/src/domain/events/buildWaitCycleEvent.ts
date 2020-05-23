import State from '../State'
import Event from '../Event'

export const buildWaitCycleEvent = (state: State): Event =>
    ({ cycles: state.cycles - 1 })
