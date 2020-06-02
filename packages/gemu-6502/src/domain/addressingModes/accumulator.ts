import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import AddressingModeResult from '../AddressingModeResult'

const accumulator = (_: Bus, __: number[], registers: DataRegisters): Partial<AddressingModeResult> => ({
    parameter: registers.a
})

export default accumulator
