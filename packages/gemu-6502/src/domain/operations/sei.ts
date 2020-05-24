import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sei = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: true
    }
})

export default sei
