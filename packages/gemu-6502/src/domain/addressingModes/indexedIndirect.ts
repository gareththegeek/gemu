import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const indexedIndirect = (bus: Bus, operand: number[], registers: DataRegisters): number => {
    const indirect = operand[0] + registers.x
    const lo = bus.read(indirect)
    const hi = bus.read(indirect + 1)
    const direct = littleEndian([lo, hi])
    return bus.read(direct)
}

export default indexedIndirect
