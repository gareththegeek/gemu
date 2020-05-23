import State from '../State'
import Event from '../Event'
import Bus from '../../infrastructure/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import highByte from '../bitwise/highByte'
import lowByte from '../bitwise/lowByte'
import getStatusByte from '../bitwise/getStatusByte'
import littleEndian from '../bitwise/littleEndian'

export const buildInterruptEvent = (state: State, bus: Bus, vector: number, bflag: number): Event => {
    bus.write(getStackAddress(state.sp - 0), highByte(state.pc))
    bus.write(getStackAddress(state.sp - 1), lowByte(state.pc))
    bus.write(getStackAddress(state.sp - 2), getStatusByte(state.status) | bflag)
    
    const lo = bus.read(vector + 0)
    const hi = bus.read(vector + 1)
    const pc = littleEndian([lo, hi])
    
    return {
        ...state,
        pc,
        sp: state.sp - 3,
        irq: false,
        nmi: false,
        status: {
            ...state.status,
            irqDisable: true
        }
    }
}
