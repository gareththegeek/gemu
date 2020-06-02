import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'

const indexedIndirect = (bus: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => {
    const indirect = toByte(operand[0] + registers.x)
    const lo = bus.readQuery(indirect)
    const hi = bus.readQuery(toByte(indirect + 1))
    const direct = littleEndian([lo, hi])
    return {
        parameter: direct
    }
}

export default indexedIndirect
