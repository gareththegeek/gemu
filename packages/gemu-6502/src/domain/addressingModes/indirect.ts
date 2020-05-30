import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'

const indirect = (bus: Bus, operand: number[], _: DataRegisters): AddressingModeResult => {
    const address = littleEndian(operand)
    const lo = bus.readQuery(address)
    const hi = bus.readQuery(address + 1)
    return {
        parameter: littleEndian([lo, hi])
    }
}

export default indirect
