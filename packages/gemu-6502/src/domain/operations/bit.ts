import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'
import isNegative from '../bitwise/isNegative'

const bit = (state: State, _: Bus, parameter: number): Event<State> => ({
    status: {
        zero: (state.a & parameter) === 0x00,
        overflow: (parameter & 0x40) >> 6 === 0x01,
        negative: isNegative(parameter)
    }
})

export default bit
