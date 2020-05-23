import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const cld = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: false
    }
})

export default cld
