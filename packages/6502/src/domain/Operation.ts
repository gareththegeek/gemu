import Event from './Event'
import State from './State'
import Bus from '../infrastructure/Bus'

type Operation = (state: State, bus: Bus, parameter: number) => Event

export default Operation
