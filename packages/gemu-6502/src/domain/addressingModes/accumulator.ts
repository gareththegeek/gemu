import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'

const accumulator = (_: Bus, __: number[], registers: DataRegisters): number => registers.a

export default accumulator
