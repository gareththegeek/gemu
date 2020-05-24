import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'

const zeroPageIndexedX = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.read(operand[0] + registers.x)

export default zeroPageIndexedX
