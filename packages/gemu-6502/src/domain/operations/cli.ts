import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const cli = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: false
    }
})

export default cli
