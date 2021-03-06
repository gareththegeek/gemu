import { Cpu6502 } from 'gemu-6502'

export const resetCommand = (cpu: Cpu6502) =>
    () => cpu.resetCommand()
