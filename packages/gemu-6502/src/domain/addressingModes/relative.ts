import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'
import toSigned from '../bitwise/toSigned'

const relative = (_: Bus, operand: number[], __: DataRegisters): number => toSigned(operand[0])

export default relative
