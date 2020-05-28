export interface TestProgram {
    name: string
    instructionCount: number
    program: number[]
    memory?: number[]
    zeroPage?: number[]
    expectation: object
}
