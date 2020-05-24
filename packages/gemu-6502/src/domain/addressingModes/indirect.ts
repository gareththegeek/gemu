import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const indirect = (bus: Bus, operand: number[], _: DataRegisters): number => {
    const address = littleEndian(operand)
    const lo = bus.readQuery(address)
    const hi = bus.readQuery(address + 1)
    return littleEndian([lo, hi])
}

export default indirect
