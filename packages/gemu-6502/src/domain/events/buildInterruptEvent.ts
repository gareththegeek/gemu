import State from '../State'
import Event from 'gemu-interfaces/dist/Event'
import Bus from 'gemu-interfaces/dist/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import highByte from '../bitwise/highByte'
import lowByte from '../bitwise/lowByte'
import getStatusByte from '../bitwise/getStatusByte'
import littleEndian from '../bitwise/littleEndian'

export const buildInterruptEvent = (state: State, bus: Bus, vector: number, bflag: number): Event<State> => {
    bus.writeCommand(getStackAddress(state.sp - 0), highByte(state.pc))
    bus.writeCommand(getStackAddress(state.sp - 1), lowByte(state.pc))
    bus.writeCommand(getStackAddress(state.sp - 2), getStatusByte(state.status) | bflag)
    
    const lo = bus.readQuery(vector + 0)
    const hi = bus.readQuery(vector + 1)
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
