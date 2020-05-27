import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const sta = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.writeCommand(parameter, state.a)
    return {}
}

export default sta
