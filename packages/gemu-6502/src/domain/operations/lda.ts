import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isZero from '../bitwise/isZero'
import isNegative from '../bitwise/isNegative'

const lda = (_: State, __: Bus, parameter: number): Event<State> => ({
    a: parameter,
    status: {
        negative: isNegative(parameter),
        zero: isZero(parameter)
    }
})

export default lda
