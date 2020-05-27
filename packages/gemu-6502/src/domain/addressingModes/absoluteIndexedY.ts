import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absoluteIndexedY = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.readQuery(littleEndian(operand) + registers.y)

export default absoluteIndexedY
    