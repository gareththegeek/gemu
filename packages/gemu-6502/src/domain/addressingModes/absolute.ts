import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'
import littleEndian from '../bitwise/littleEndian'

const absolute = (bus: Bus, operand: number[], _: DataRegisters): number =>
    bus.read(littleEndian(operand))

export default absolute
