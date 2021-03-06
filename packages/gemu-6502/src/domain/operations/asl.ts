import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import State from '../State'
import toByte from '../bitwise/toByte'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const asl = (_: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.readQuery(parameter)
    const next = toByte(current << 1)
    bus.writeCommand(parameter, next)
    return {
        status: {
            negative: isNegative(next),
            zero: isZero(next),
            carry: isNegative(current)
        }
    }
}

export default asl
