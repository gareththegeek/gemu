import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const lsr = (_: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.readQuery(parameter)
    const next = current >> 1
    bus.writeCommand(parameter, next)
    return {
        status: {
            zero: isZero(next),
            negative: false,
            carry: isBitZeroSet(current)
        }
    }
}

export default lsr
