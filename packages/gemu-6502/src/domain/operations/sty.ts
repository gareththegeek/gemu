import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sty = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.writeCommand(parameter, state.y)
    return {}
}

export default sty
