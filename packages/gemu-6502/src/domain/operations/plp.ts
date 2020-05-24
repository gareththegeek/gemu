import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import getByteStatus from '../bitwise/getByteStatus'

const plp = (state: State, bus: Bus, _: number): Event<State> => {
    const next = bus.readQuery(getStackAddress(state.sp + 1))
    return {
        sp: state.sp + 1,
        status: getByteStatus(next)
    }
}

export default plp
