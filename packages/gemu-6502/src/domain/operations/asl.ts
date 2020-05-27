import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import State from '../State'
import toByte from '../bitwise/toByte'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const asl = (_: State, __: Bus, parameter: number): Event<State> => {
    const next = toByte(parameter << 1)
    return {
        a: next,
        status: {
            negative: isNegative(next),
            zero: isZero(next),
            carry: isNegative(parameter)
        }
    }
}

export default asl
