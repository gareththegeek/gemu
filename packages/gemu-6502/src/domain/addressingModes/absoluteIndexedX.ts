import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'

const absoluteIndexedX = (bus: Bus, operand: number[], registers: DataRegisters): AddressingModeResult => {
    const base = littleEndian(operand)
    return {
        parameter: bus.readQuery(base + registers.x),
        pageBoundaryCrossed: isPageCrossed(base, registers.x)
    }
}

export default absoluteIndexedX
