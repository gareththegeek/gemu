import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const implied = (_: Bus, __: number[], ___: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: 0
})

export default implied
