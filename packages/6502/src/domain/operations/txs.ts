import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const txs = (state: State, _: Bus, __: number): Event => ({
    sp: state.x,
    status: {
        zero: isZero(state.x),
        negative: isNegative(state.x)
    }
})

export default txs
