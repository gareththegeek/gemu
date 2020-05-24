import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sty = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.y)
    return {}
}

export default sty
