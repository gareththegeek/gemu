import { Bus } from 'gemu-interfaces'
import DataRegisters from './DataRegisters'

type AddressingMode = (bus: Bus, operand: number[], registers: DataRegisters) => number

export default AddressingMode
