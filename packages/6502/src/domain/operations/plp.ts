import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import getStackAddress from '../bitwise/getStackAddress'
import getByteStatus from '../bitwise/getByteStatus'

const plp = (state: State, bus: Bus, _: number): Event => {
    const next = bus.read(getStackAddress(state.sp + 1))
    return {
        sp: state.sp + 1,
        status: getByteStatus(next)
    }
}

export default plp
