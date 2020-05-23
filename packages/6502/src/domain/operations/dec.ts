import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const dec = (_: State, bus: Bus, parameter: number): Event => {
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
