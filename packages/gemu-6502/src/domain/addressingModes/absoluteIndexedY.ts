import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'

const absoluteIndexedY = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    const base = littleEndian(operand)
    return {
        parameter: bus.readQuery(base + registers.y),
        pageBoundaryCrossed: isPageCrossed(base, registers.y)
    }
}

export default absoluteIndexedY
    