import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const zeroPageIndexedX = (_: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: operand[0] + registers.x
})

export default zeroPageIndexedX
