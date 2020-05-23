import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ora = (state: State, _: Bus, parameter: number): Event => {
    const a = state.a | parameter
    return {
        a,
        status: {
            negative: isNegative(a),
            zero: isZero(a)
        }
    }
}

export default ora
