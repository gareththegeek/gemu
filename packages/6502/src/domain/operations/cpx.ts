import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isNegative from '../bitwise/isNegative'

const cpx = (state: State, _: Bus, parameter: number): Event => ({
    status: {
        zero: state.x === parameter,
        carry: state.x >= parameter,
        negative: isNegative(state.x - parameter)
    }
})

export default cpx
