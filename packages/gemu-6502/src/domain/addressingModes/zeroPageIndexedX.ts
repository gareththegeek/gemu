import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const zeroPageIndexedX = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => ({
    parameter: bus.readQuery(operand[0] + registers.x)
})

export default zeroPageIndexedX
