import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const cli = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: false
    }
})

export default cli
