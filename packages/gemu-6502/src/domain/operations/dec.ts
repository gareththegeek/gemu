import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'
import toByte from '../bitwise/toByte'

const dec = (_: State, bus: Bus, parameter: number): Event<State> => {
    const value = toByte(bus.readQuery(parameter) - 1)
    bus.writeCommand(parameter, value)
    return {
        status: {
            zero: isZero(value),
            negative: isNegative(value)
        }
    }
}

export default dec
