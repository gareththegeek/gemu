import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sta = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.write(parameter, state.a)
    return {}
}

export default sta
