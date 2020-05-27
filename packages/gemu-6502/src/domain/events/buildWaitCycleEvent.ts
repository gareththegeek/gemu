import State from '../State'
import { Event } from 'gemu-interfaces'

export const buildWaitCycleEvent = (state: State): Event<State> =>
    ({ cycles: state.cycles - 1 })
