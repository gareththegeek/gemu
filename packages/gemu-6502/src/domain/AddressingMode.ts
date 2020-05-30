import { Bus } from 'gemu-interfaces'
import DataRegisters from './DataRegisters'
import AddressingModeResult from './AddressingModeResult'

type AddressingMode = (bus: Bus, operand: number[], registers: DataRegisters) => AddressingModeResult

export default AddressingMode
