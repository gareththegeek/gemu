export default interface Instruction {
    opcode: number
    mnemonic: string
    addressingMode: string
    size: number
    cycles: number
    addPageBoundaryCycle: boolean
}
