import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const ldx = (_: State, __: Bus, parameter: number): Event<State> => ({
    x: parameter,
    status: {
        negative: isNegative(parameter),
        zero: isZero(parameter)
    }
})

export default ldx
