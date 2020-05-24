import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const clc = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: false
    }
})

export default clc
