import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sta = (state: State, bus: Bus, parameter: number): Event => {
    bus.write(parameter, state.a)
    return {}
}

export default sta
