import Bus from '../infrastructure/Bus'
import DataRegisters from './DataRegisters'

type AddressingMode = (bus: Bus, operand: number[], registers: DataRegisters) => number

export default AddressingMode
