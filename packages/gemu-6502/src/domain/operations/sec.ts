import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sec = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: true
    }
})

export default sec
