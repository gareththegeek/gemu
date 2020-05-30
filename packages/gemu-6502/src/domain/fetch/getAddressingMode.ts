import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import { getAddressingModeTable } from '../addressingModes/addressingModeTable'
import AddressingModeResult from '../AddressingModeResult'

const getAddressingMode = (
    bus: Bus,
    addressingMode: string,
    operand: Array<number>,
    dataRegisters: DataRegisters
): AddressingModeResult => getAddressingModeTable()[addressingMode.toLowerCase()](bus, operand, dataRegisters)

export default getAddressingMode
