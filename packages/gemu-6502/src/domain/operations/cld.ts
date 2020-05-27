import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const cld = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: false
    }
})

export default cld
