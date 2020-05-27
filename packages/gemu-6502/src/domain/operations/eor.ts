import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const eor = (state: State, _: Bus, parameter: number): Event<State> => {
    const a = state.a ^ parameter
    return {
        a,
        status: {
            negative: isNegative(a),
            zero: isZero(a)
        }
    }
}

export default eor
