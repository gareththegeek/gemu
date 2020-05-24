import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sec = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: true
    }
})

export default sec
