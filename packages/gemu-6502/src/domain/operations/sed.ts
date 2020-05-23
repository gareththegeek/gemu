import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sed = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: true
    }
})

export default sed
