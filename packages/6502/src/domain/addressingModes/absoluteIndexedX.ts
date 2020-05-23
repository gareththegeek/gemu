import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absoluteIndexedX = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.read(littleEndian(operand) + registers.x)

export default absoluteIndexedX
