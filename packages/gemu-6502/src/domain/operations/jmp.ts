import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const jmp = (_: State, __: Bus, parameter: number): Event<State> => ({
    pc: parameter
})

export default jmp
