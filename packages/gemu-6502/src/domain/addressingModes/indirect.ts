import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const indirect = (bus: Bus, operand: number[], _: DataRegisters): number => {
    const address = littleEndian(operand)
    const lo = bus.read(address)
    const hi = bus.read(address + 1)
    return littleEndian([lo, hi])
}

export default indirect
