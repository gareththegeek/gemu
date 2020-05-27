import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const clv = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        overflow: false
    }
})

export default clv
