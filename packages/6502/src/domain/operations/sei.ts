import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sei = (_: State, __: Bus, ___: number): Event => ({
    status: {
        irqDisable: true
    }
})

export default sei
