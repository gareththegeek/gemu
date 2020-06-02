import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'

const zeroPageIndexedY = (_: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: toByte(operand[0] + registers.y)
})

export default zeroPageIndexedY
