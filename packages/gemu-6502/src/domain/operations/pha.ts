import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import getStackAddress from '../bitwise/getStackAddress'

const pha = (state: State, bus: Bus, _: number): Event<State> => {
    bus.write(getStackAddress(state.sp), state.a)
    return {
        sp: state.sp - 1
    }
}

export default pha
