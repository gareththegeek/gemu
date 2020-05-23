import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isNegative from '../bitwise/isNegative'

const cpy = (state: State, _: Bus, parameter: number): Event => ({
    status: {
        zero: state.y === parameter,
        carry: state.y >= parameter,
        negative: isNegative(state.y - parameter)
    }
})

export default cpy
