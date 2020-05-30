import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'

const indexedIndirect = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    const indirect = operand[0] + registers.x
    const lo = bus.readQuery(indirect)
    const hi = bus.readQuery(indirect + 1)
    const direct = littleEndian([lo, hi])
    return {
        parameter: bus.readQuery(direct)
    }
}

export default indexedIndirect
