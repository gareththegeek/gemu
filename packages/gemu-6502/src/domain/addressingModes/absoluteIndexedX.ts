import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absoluteIndexedX = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.readQuery(littleEndian(operand) + registers.x)

export default absoluteIndexedX
