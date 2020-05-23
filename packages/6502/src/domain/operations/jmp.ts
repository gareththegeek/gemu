import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const jmp = (_: State, __: Bus, parameter: number): Event => ({
    pc: parameter
})

export default jmp
