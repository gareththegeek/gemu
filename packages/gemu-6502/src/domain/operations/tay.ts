import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tay = (state: State, _: Bus, __: number): Event<State> => ({
    y: state.a,
    status: {
        zero: isZero(state.a),
        negative: isNegative(state.a)
    }
})

export default tay
