import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'

const indirectIndexed = (bus: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => {
    const indirect = operand[0]
    const lo = bus.readQuery(indirect)
    const hi = bus.readQuery(indirect + 1)
    const base = littleEndian([lo, hi])
    const direct = base + registers.y
    return {
        parameter: direct,
        pageBoundaryCrossed: isPageCrossed(base, registers.y)
    }
}

export default indirectIndexed
