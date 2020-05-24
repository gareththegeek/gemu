import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isNegative from '../bitwise/isNegative'
import isZero from '../bitwise/isZero'

const and = (state: State, _: Bus, parameter: number): Event<State> => {
    const a = state.a & parameter
    return {
        a,
        status: {
            negative: isNegative(a),
            zero: isZero(a)
        }
    }
}

export default and
