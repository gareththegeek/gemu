import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ldy = (_: State, __: Bus, parameter: number): Event<State> => ({
    y: parameter,
    status: {
        negative: isNegative(parameter),
        zero: isZero(parameter)
    }
})

export default ldy
