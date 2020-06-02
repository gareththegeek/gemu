import Instruction from '../Instruction'
import AddressingModeResult from '../AddressingModeResult'
import { byte } from './byte'
import { word } from './word'

const BYTE_ADDRESSING_MODES = ['accum', 'imm', 'zp', 'zp,x', 'zp,y']
const BRANCH_INSTRUCTIONS = ['bcc', 'bcs', 'beq', 'bmi', 'bne', 'bpl', 'bvc', 'bvs']

const isByteOperand = (addressingMode: string): boolean =>
    BYTE_ADDRESSING_MODES.includes(addressingMode)

const isBranchInstruction = (instruction: Instruction) : boolean =>
    BRANCH_INSTRUCTIONS.includes(instruction.mnemonic.toLowerCase())

const getOperandString = (
    pc: number,
    addressingMode: string,
    result: AddressingModeResult,
    branch: boolean): string => {
    const am = addressingMode.toLowerCase()

    if (am === 'implied') {
        return ''
    }

    const imm = am === 'imm' ? '#' : ''
    const number = branch
        ? word(pc + result.parameter)
        : isByteOperand(am)
            ? byte(result.parameter)
            : word(result.parameter)

    const partialOperand = `${imm}$${number}`

    switch (am) {
        case 'accum':
            return 'A'
        case 'abs,x':
            return `${partialOperand},X`
        case 'abs,y':
            return `${partialOperand},Y`
        case '(ind,x)':
            return `(${partialOperand},X)`
        case '(ind),y':
            return `(${partialOperand}),Y`
        case 'zp,x':
            return `(${partialOperand},X)`
        case 'zp,y':
            return `(${partialOperand}),Y`
        default:
            return partialOperand
    }
}

export const disassemble = (pc: number, instruction: Instruction, result: AddressingModeResult): string =>
    `${instruction.mnemonic.toUpperCase()} ${getOperandString(pc + instruction.size, instruction.addressingMode, result, isBranchInstruction(instruction))}`
