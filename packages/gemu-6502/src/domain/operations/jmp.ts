import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const jmp = (_: State, __: Bus, parameter: number): Event<State> => ({
    pc: parameter
})

export default jmp
