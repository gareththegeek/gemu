import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isNegative from '../bitwise/isNegative'

const cmp = (state: State, _: Bus, parameter: number): Event<State> => ({
    status: {
        zero: state.a === parameter,
        carry: state.a >= parameter,
        negative: isNegative(state.a - parameter)
    }
})

export default cmp
