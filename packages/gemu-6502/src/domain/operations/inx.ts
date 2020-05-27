import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import toByte from '../bitwise/toByte'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const inx = (state: State, _: Bus, __: number): Event<State> => {
    const next = toByte(state.x + 1)
    return {
        x: next,
        status: {
            zero: isZero(next),
            negative: isNegative(next)
        }
    }
}

export default inx
