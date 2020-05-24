import Bus from 'gemu-interfaces/dist/Bus'
import DataRegisters from '../DataRegisters'
import { getAddressingModeTable } from '../addressingModes/addressingModeTable'

const getAddressingMode = (
    bus: Bus,
    addressingMode: string,
    operand: Array<number>,
    dataRegisters: DataRegisters
): number => getAddressingModeTable()[addressingMode.toLowerCase()](bus, operand, dataRegisters)

export default getAddressingMode
