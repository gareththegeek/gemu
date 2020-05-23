import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const clv = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        overflow: false
    }
})

export default clv
