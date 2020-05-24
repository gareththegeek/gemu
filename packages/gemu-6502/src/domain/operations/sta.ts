import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sta = (state: State, bus: Bus, parameter: number): Event<State> => {
    bus.writeCommand(parameter, state.a)
    return {}
}

export default sta
