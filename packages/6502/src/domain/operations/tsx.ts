import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const tsx = (state: State, _: Bus, __: number): Event => ({
    x: state.sp,
    status: {
        zero: isZero(state.sp),
        negative: isNegative(state.sp)
    }
})

export default tsx
