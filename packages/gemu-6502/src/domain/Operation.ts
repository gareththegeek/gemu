import { Event, Bus } from 'gemu-interfaces'
import State from './State'

type Operation = (state: State, bus: Bus, parameter: number) => Event<State>

export default Operation
