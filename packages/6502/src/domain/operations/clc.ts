import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const clc = (_: State, __: Bus, ___: number): Event => ({
    status: {
        carry: false
    }
})

export default clc
