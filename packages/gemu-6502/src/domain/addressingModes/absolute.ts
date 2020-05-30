import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'

const absolute = (bus: Bus, operand: number[], _: DataRegisters): AddressingModeResult => ({
    parameter: bus.readQuery(littleEndian(operand))
})

export default absolute
