import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sty = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.y)
    return {}
}

export default sty
