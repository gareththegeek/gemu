import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isNegative from '../bitwise/isNegative'

const cpx = (state: State, _: Bus, parameter: number): Event<State> => ({
    status: {
        zero: state.x === parameter,
        carry: state.x >= parameter,
        negative: isNegative(state.x - parameter)
    }
})

export default cpx
