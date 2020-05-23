import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const stx = (state: State, bus: Bus, parameter: number): Event => {
    bus.write(parameter, state.x)
    return {}
}

export default stx
