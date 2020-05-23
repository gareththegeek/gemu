import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'

const zeroPageIndexedY = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.read(operand[0] + registers.y)

export default zeroPageIndexedY
