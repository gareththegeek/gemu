import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const stx = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.x)
    return {}
}

export default stx
