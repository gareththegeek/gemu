import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import getStackAddress from '../bitwise/getStackAddress'
import getByteStatus from '../bitwise/getByteStatus'
import littleEndian from '../bitwise/littleEndian'
import StatusRegister from '../StatusRegister'

const rti = (state: State, bus: Bus, _: number): Event<State> => {
    const byte = bus.readQuery(getStackAddress(state.sp + 1))
    const status: StatusRegister = {
        ...getByteStatus(byte),
        break: state.status.break
    }
    const lo = bus.readQuery(getStackAddress(state.sp + 2))
    const hi = bus.readQuery(getStackAddress(state.sp + 3))
    const pc = littleEndian([lo, hi])
    return {
        pc,
        sp: state.sp + 3,
        status
    }
}

export default rti
