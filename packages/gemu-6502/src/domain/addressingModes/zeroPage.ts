import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'

const zeroPage = (bus: Bus, operand: number[], __: DataRegisters): number => bus.read(operand[0])

export default zeroPage
