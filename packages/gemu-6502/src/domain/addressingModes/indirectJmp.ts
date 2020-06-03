import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toByte from '../bitwise/toByte'

const indirectJmp = (bus: Bus, operand: number[], _: DataRegisters): Partial<AddressingModeResult> => {
    const addressLo = littleEndian(operand)
    const lo = bus.readQuery(addressLo)
    // Implement jmp indirect bug
    const addressHi = littleEndian([toByte(operand[0] + 1), operand[1]])
    const hi = bus.readQuery(addressHi)
    return {
        parameter: littleEndian([lo, hi])
    }
}

export default indirectJmp
