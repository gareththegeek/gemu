import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const sec = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: true
    }
})

export default sec
