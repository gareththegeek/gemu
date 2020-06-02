import * as fs from 'fs'
import State from '../State'
import Instruction from '../Instruction'
import AddressingModeResult from '../AddressingModeResult'
import getStatusByte from '../bitwise/getStatusByte'
import { byte } from './byte'
import { word } from './word'
import { disassemble } from './disassemble'

const flag = (f: boolean, t: string): string => f ? t : ' '

const LOG_FILE = './logs/6502.log'

export const logState = (
    state: State,
    instruction: Instruction,
    operand: number[],
    operandResult: AddressingModeResult) => {

    const {
        carry,
        irqDisable,
        negative,
        overflow,
        zero
    } = state.status

    const operands = operand.map(o => byte(o)).join(' ').padEnd(5, ' ')
    //const flags = `${flag(negative, 'N')}${flag(overflow, 'V')} ${flag(state.status.break, 'B')} ${flag(irqDisable, 'I')}${flag(zero, 'Z')}${flag(carry, 'C')}`
    const flags = ''
    const disassembly = disassemble(state.pc, instruction, operandResult, operand).padEnd(30, ' ')
    const registers = `A:${byte(state.a)} X:${byte(state.x)} Y:${byte(state.y)} P:${byte(getStatusByte(state.status))} SP:${byte(state.sp)}`
    
    fs.appendFileSync(LOG_FILE, 
            `${word(state.pc)}  ${byte(instruction.opcode)} ${operands}  ${disassembly}  ${registers} ${flags}\n`
        )
}
