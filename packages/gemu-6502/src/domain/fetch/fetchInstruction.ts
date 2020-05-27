import { Bus } from 'gemu-interfaces'
import Instruction from '../Instruction'
import { getInstructionTable } from './instructionTable'

const fetchInstruction = (bus: Bus, address: number): Instruction => {
    const opcode = bus.readQuery(address)
    const table = getInstructionTable()

    if (!(opcode in table)) {
        return table[0x00]
    }

    return table[opcode]
}

export default fetchInstruction
