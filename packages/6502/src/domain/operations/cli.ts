import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const cli = (_: State, __: Bus, ___: number): Event => ({
    status: {
        irqDisable: false
    }
})

export default cli
