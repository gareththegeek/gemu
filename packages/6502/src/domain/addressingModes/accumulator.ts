import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'

const accumulator = (_: Bus, __: number[], registers: DataRegisters): number => registers.a

export default accumulator
