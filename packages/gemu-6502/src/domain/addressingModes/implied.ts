import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'

const implied = (_: Bus, __: number[], ___: DataRegisters): number => 0

export default implied
