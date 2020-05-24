import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const clv = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        overflow: false
    }
})

export default clv
