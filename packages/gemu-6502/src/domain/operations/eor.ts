import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
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
