import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import isZero from '../bitwise/isZero'
import isBitZeroSet from '../bitwise/isBitZeroSet'

const ror = (state: State, bus: Bus, parameter: number): Event<State> => {
    const current = bus.readQuery(parameter)
    const next = (current >> 1) | (state.status.carry ? 0x80 : 0x00)
    bus.writeCommand(parameter, next)
    return {
        status: {
            zero: isZero(next),
            negative: state.status.carry,
            carry: isBitZeroSet(current)
        }
    }
}

export default ror
