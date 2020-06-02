import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'

const absolute = (_: Bus, operand: number[], __: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: littleEndian(operand)
})

export default absolute
