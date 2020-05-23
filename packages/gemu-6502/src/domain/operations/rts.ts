import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import littleEndian from '../bitwise/littleEndian'

const rts = (state: State, bus: Bus, _: number): Event<State> => {
    const lo = bus.read(getStackAddress(state.sp + 1))
    const hi = bus.read(getStackAddress(state.sp + 2))
    const pc = (littleEndian([lo, hi]) + 1) & 0xffff
    return {
        pc,
        sp: state.sp + 2
    }
}

export default rts
