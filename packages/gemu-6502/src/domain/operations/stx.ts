import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const stx = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.writeCommand(parameter, state.x)
    return {}
}

export default stx
