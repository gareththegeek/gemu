import Bus from '../../infrastructure/Bus'
import DataRegisters from '../DataRegisters'

const immediate = (_: Bus, operand: number[], __: DataRegisters): number => operand[0]

export default immediate
