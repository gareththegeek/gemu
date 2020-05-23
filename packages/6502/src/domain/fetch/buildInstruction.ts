import Instruction from '../Instruction'

const buildInstruction = (
    opcode: number,
    mnemonic: string,
    addressingMode: string,
    size: number,
    cycles: number,
    addPageBoundaryCycle = false
): Instruction => ({
    opcode,
    mnemonic,
    addressingMode,
    size,
    cycles,
    addPageBoundaryCycle
})

export default buildInstruction
