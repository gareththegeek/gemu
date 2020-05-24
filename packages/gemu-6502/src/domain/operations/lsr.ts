import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const lsr = (_: State, __: Bus, parameter: number): Event<State> => {
    const next = parameter >> 1
    return {
        a: next,
        status: {
            zero: isZero(next),
            negative: false,
            carry: isBitZeroSet(parameter)
        }
    }
}

export default lsr
