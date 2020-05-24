import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const cli = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        irqDisable: false
    }
})

export default cli
