import State from '../State'
import Event from 'gemu-interfaces/dist/Event'
import Bus from 'gemu-interfaces/dist/Bus'
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

    const preExecuteState = {
        ...state,
        pc: state.pc + instruction.size,
        cycles: instruction.cycles
    }

    const operation = getOperation(instruction)
    return operation(preExecuteState, bus, parameter)
}
