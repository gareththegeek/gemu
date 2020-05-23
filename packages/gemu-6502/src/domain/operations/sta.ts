import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sta = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.a)
    return {}
}

export default sta
