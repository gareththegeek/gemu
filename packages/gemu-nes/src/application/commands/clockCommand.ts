import { Cpu6502 } from 'gemu-6502'

export const clockCommand = (cpu: Cpu6502) =>
    () => cpu.clockCommand()
