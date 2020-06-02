import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import { getAddressingModeTable } from '../addressingModes/addressingModeTable'
import AddressingModeResult from '../AddressingModeResult'

const MEMORY_ADDRESSING_MODES = [
    'abs',
    'abs,x',
    'abs,y',
    '(ind,x)',
    '(ind),y',
    'zp',
    'zp,x',
    'zp,y'
]

const isMemoryAddressingMode = (mneumonic: string) =>
    MEMORY_ADDRESSING_MODES.includes(mneumonic.toLowerCase())

const getAddressingMode = (
    bus: Bus,
    addressingModeMneumonic: string,
    operand: Array<number>,
    dataRegisters: DataRegisters,
    read: boolean
): AddressingModeResult => {
    const addressingMode = getAddressingModeTable()[addressingModeMneumonic.toLowerCase()]
    
    const result = addressingMode(bus, operand, dataRegisters)

    if (read && isMemoryAddressingMode(addressingModeMneumonic)) {
        result.value = bus.readQuery(result.parameter)
    } else {
        result.value = result.parameter
    }

    return result as AddressingModeResult
}

export default getAddressingMode
