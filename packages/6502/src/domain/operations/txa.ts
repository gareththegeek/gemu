import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const txa = (state: State, _: Bus, __: number): Event => ({
    a: state.x,
    status: {
        zero: isZero(state.x),
        negative: isNegative(state.x)
    }
})

export default txa
