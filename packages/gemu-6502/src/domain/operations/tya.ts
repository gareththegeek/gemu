import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tya = (state: State, _: Bus, __: number): Event<State> => ({
    a: state.y,
    status: {
        zero: isZero(state.y),
        negative: isNegative(state.y)
    }
})

export default tya
