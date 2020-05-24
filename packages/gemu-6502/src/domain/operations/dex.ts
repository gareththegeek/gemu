import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import toByte from '../bitwise/toByte'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const dex = (state: State, _: Bus, __: number): Event<State> => {
    const next = toByte(state.x - 1)
    return {
        x: next,
        status: {
            zero: isZero(next),
            negative: isNegative(next)
        }
    }
}

export default dex
