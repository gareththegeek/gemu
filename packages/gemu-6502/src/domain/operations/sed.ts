import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const sed = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: true
    }
})

export default sed
