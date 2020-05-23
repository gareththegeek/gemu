import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'
import isNegative from '../bitwise/isNegative'

const bit = (state: State, _: Bus, parameter: number): Event => ({
    status: {
        zero: (state.a & parameter) === 0x00,
        overflow: (parameter & 0x40) >> 6 === 0x01,
        negative: isNegative(parameter)
    }
})

export default bit
