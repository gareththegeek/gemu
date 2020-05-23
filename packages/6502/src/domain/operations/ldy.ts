import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ldy = (_: State, __: Bus, parameter: number): Event => ({
    y: parameter,
    status: {
        negative: isNegative(parameter),
        zero: isZero(parameter)
    }
})

export default ldy
