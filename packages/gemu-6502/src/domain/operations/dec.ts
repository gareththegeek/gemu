import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const dec = (_: State, bus: Bus, parameter: number): Event<State> => {
    const value = bus.read(parameter) - 1
    bus.write(parameter, value)
    return {
        status: {
            zero: isZero(value),
            negative: isNegative(value)
        }
    }
}

export default dec
