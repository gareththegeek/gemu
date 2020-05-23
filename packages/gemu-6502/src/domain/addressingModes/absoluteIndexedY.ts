import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absoluteIndexedY = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.read(littleEndian(operand) + registers.y)

export default absoluteIndexedY
    