import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'
import AddressingModeResult from '../AddressingModeResult'
import isPageCrossed from '../bitwise/isPageCrossed'

const absoluteIndexedX = (_: Bus, operand: number[], registers: DataRegisters): Partial<AddressingModeResult> => {
    const base = littleEndian(operand)
    return {
        parameter: base + registers.x,
        pageBoundaryCrossed: isPageCrossed(base, registers.x)
    }
}

export default absoluteIndexedX
