import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const jmp = (_: State, __: Bus, parameter: number): Event<State> => ({
    pc: parameter
})

export default jmp
