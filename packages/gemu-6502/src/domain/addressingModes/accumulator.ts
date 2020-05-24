import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'

const accumulator = (_: Bus, __: number[], registers: DataRegisters): number => registers.a

export default accumulator
