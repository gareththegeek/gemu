import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tay = (state: State, _: Bus, __: number): Event => ({
    y: state.a,
    status: {
        zero: isZero(state.a),
        negative: isNegative(state.a)
    }
})

export default tay
