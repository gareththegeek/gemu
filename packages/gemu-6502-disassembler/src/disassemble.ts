import { Instruction, AddressingModeResult } from 'gemu-6502'
import { byte } from './byte'
import { word } from './word'
import littleEndian from 'gemu-6502/dist/domain/bitwise/littleEndian'

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
    branch: boolean,
    operand: number[]): string => {
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
            return `$${word(littleEndian(operand))},X`
        case 'abs,y':
            return `$${word(littleEndian(operand))},Y`
        case 'indirect':
        case 'indirectjmp':
            return `($${word(littleEndian(operand))})`
        case '(ind,x)':
            return `($${byte(operand[0])},X)`
        case '(ind),y':
            return `($${byte(operand[0])}),Y`
        case 'zp,x':
            return `$${byte(operand[0])},X`
        case 'zp,y':
            return `$${byte(operand[0])},Y`
        default:
            return partialOperand
    }
}

export const disassemble = (pc: number, instruction: Instruction, result: AddressingModeResult, operand: number[]): string =>
    `${instruction.mnemonic.toUpperCase().substr(0, 3)} ${getOperandString(pc + instruction.size, instruction.addressingMode, result, isBranchInstruction(instruction), operand)}`
