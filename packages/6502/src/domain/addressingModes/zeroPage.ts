import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'

const zeroPage = (bus: Bus, operand: number[], __: DataRegisters): number => bus.read(operand[0])

export default zeroPage
