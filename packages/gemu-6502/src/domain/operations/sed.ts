import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const sed = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        decimal: true
    }
})

export default sed
