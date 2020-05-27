import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absolute = (bus: Bus, operand: number[], _: DataRegisters): number =>
    bus.readQuery(littleEndian(operand))

export default absolute
