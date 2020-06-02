import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import toWord from '../bitwise/toWord'

const indirect = (bus: Bus, operand: number[], _: DataRegisters): Partial<AddressingModeResult> => {
    const address = littleEndian(operand)
    const lo = bus.readQuery(address)
    const hi = bus.readQuery(toWord(address + 1))
    return {
        parameter: littleEndian([lo, hi])
    }
}

export default indirect
