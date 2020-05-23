import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import getByteStatus from '../bitwise/getByteStatus'
import littleEndian from '../bitwise/littleEndian'

const rti = (state: State, bus: Bus, _: number): Event => {
    const byte = bus.read(getStackAddress(state.sp + 1))
    const status = getByteStatus(byte)
    const lo = bus.read(getStackAddress(state.sp + 2))
    const hi = bus.read(getStackAddress(state.sp + 3))
    const pc = littleEndian([lo, hi])
    return {
        pc,
        sp: state.sp + 3,
        status
    }
}

export default rti
