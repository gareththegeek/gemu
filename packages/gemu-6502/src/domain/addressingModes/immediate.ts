import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const immediate = (_: Bus, operand: number[], __: DataRegisters): AddressingModeResult => ({
    parameter: operand[0]
})

export default immediate
