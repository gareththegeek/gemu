import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'

const zeroPage = (bus: Bus, operand: number[], __: DataRegisters): number => bus.readQuery(operand[0])

export default zeroPage
