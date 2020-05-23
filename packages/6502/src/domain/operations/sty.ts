import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sty = (state: State, bus: Bus, parameter: number): Event => {
    bus.write(parameter, state.y)
    return {}
}

export default sty
