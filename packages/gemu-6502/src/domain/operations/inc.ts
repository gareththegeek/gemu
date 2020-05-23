import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import toByte from '../bitwise/toByte'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const inc = (_: State, bus: Bus, parameter: number): Event<State> => {
    const read = bus.read(parameter)
    const value = toByte(read + 1)
    bus.write(parameter, value)
    return {
        status: {
            zero: isZero(value),
            negative: isNegative(value)
        }
    }
}

export default inc
