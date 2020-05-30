import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import toSigned from '../bitwise/toSigned'
import AddressingModeResult from '../AddressingModeResult'

const relative = (_: Bus, operand: number[], __: DataRegisters): AddressingModeResult => ({
    parameter: toSigned(operand[0])
})

export default relative
