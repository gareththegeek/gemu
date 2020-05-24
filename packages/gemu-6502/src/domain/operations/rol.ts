import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import toByte from '../bitwise/toByte'
import boolToByte from '../bitwise/boolToByte'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const rol = (state: State, _: Bus, parameter: number): Event<State> => {
    const next = toByte(parameter << 1) | boolToByte(state.status.carry)
    return {
        a: next,
        status: {
            negative: isNegative(next),
            zero: isZero(next),
            carry: isNegative(parameter)
        }
    }
}

export default rol
