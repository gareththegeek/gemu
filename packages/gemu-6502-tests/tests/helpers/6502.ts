import * as chai from 'chai'
import * as chaiSubset from 'chai-subset'
import { RomSystemComponent, MemorySystemComponent, System } from '../System'
import { build6502System } from './factories'
import { TestProgram } from '../TestProgram'
chai.use(chaiSubset)
const expect = chai.expect

export const initialiseSystem = (system: System): void => {
    const { component } = system.cpu
    component.resetCommand()
    component.clockCommand()
    component.clockCommand()
    component.clockCommand()
    component.clockCommand()
    component.clockCommand()
    component.clockCommand()
    component.clockCommand()
}

export const loadRom = (rom: RomSystemComponent, program: number[]): void => {
    const data = [...program, ...new Array(0xfc - program.length).fill(0), 0x00, 0xff]
    rom.store.overwrite({
        data,
        initialised: true
    })
}

export const loadMemory = (memory: MemorySystemComponent, data: number[]): void => {
    data.forEach((byte, index) => memory.component.writeCommand(index, byte))
}

export const testProgram = (program: TestProgram): void => {
    const system = build6502System()
    if (program.memory) {
        loadMemory(system.memory, program.memory)
    }
    if (program.zeroPage) {
        loadMemory(system.zeroPage, program.zeroPage)
    }
    loadRom(system.rom, program.program)
    initialiseSystem(system)

    for (let i = 0; i < program.instructionCount; i++) {
        const { component } = system.cpu
        component.clockCommand()
        while (system.cpu.store.read().cycles > 0) {
            component.clockCommand()
        }
    }
    expect(system.cpu.store.read()).to.containSubset(program.expectation)
}
