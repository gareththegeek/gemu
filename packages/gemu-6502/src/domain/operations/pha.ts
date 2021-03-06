import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import getStackAddress from '../bitwise/getStackAddress'

const pha = (state: State, bus: Bus, _: number): Event<State> => {
    bus.writeCommand(getStackAddress(state.sp), state.a)
    return {
        sp: state.sp - 1
    }
}

export default pha
