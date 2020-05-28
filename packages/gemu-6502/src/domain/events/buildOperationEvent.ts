import State from '../State'
import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import DataRegisters from '../DataRegisters'
import fetchInstruction from '../fetch/fetchInstruction'
import fetchOperand from '../fetch/fetchOperand'
import getAddressingMode from '../fetch/getAddressingMode'
import getOperation from '../execute/getOperation'

export const buildOperationEvent = (state: State, bus: Bus): Event<State> => {
    //TODO extra cycles
    //TODO address mirroring
    //TODO check all ops for overflows e.g. 0xff + 1
    //TODO implement h/w bugs
    const instruction = fetchInstruction(bus, state.pc)
    const operand = fetchOperand(bus, state.pc + 1, instruction.size - 1)
    const dataRegisters = (({ a, x, y }): DataRegisters => ({ a, x, y }))(state)
    const parameter = getAddressingMode(bus, instruction.addressingMode, operand, dataRegisters)

    const preExecuteEvent = {
        pc: state.pc + instruction.size,
        cycles: instruction.cycles
    }

    const preExecuteState = {
        ...state,
        ...preExecuteEvent
    }

    const operation = getOperation(instruction)
    return { 
        ...preExecuteEvent,
        ...operation(preExecuteState, bus, parameter)
    }
}
