import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const zeroPage = (bus: Bus, operand: number[], __: DataRegisters): AddressingModeResult => ({
    parameter: bus.readQuery(operand[0])
})

export default zeroPage
