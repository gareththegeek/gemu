import { Bus } from 'gemu-interfaces'
import DataRegisters from './DataRegisters'
import AddressingModeResult from './AddressingModeResult'

type AddressingMode = (bus: Bus, operand: number[], registers: DataRegisters) => Partial<AddressingModeResult>

export default AddressingMode
