import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const sei = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: true
    }
})

export default sei
