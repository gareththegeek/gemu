import State from '../State'
import Event from 'gemu-persistance/dist/Event'

export const buildWaitCycleEvent = (state: State): Event<State> =>
    ({ cycles: state.cycles - 1 })
