import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'

const zeroPageIndexedY = (bus: Bus, operand: number[], registers: DataRegisters): number =>
    bus.readQuery(operand[0] + registers.y)

export default zeroPageIndexedY
