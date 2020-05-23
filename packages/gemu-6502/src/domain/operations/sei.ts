import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sei = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: true
    }
})

export default sei
