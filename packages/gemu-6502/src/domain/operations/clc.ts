import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const clc = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: false
    }
})

export default clc
