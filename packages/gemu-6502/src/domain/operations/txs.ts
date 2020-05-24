import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const txs = (state: State, _: Bus, __: number): Event<State> => ({
    sp: state.x,
    status: {
        zero: isZero(state.x),
        negative: isNegative(state.x)
    }
})

export default txs
