import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import getStackAddress from '../bitwise/getStackAddress'
import getByteStatus from '../bitwise/getByteStatus'

const plp = (state: State, bus: Bus, _: number): Event<State> => {
    const next = bus.readQuery(getStackAddress(state.sp + 1))
    return {
        sp: state.sp + 1,
        status: {
            ...getByteStatus(next & 0xcf),
            break: state.status.break
        }
    }
}

export default plp
