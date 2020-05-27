import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const indexedIndirect = (bus: Bus, operand: number[], registers: DataRegisters): number => {
    const indirect = operand[0] + registers.x
    const lo = bus.readQuery(indirect)
    const hi = bus.readQuery(indirect + 1)
    const direct = littleEndian([lo, hi])
    return bus.readQuery(direct)
}

export default indexedIndirect
