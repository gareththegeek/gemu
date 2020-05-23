import Instruction from '../Instruction'
import Operation from '../Operation'
import { getOperationTable } from '../operations/operationTable'

const getOperation = (instruction: Instruction): Operation =>
    getOperationTable()[instruction.mnemonic.toLowerCase()]

export default getOperation
