import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'

const zeroPageIndexedX = (_: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: toByte(operand[0] + registers.x)
})

export default zeroPageIndexedX
