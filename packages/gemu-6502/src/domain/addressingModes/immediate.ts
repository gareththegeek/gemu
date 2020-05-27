import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'

const immediate = (_: Bus, operand: number[], __: DataRegisters): number => operand[0]

export default immediate
