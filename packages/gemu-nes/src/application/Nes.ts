import { Command, StoreFactory, Component, Bus, Range, Store } from 'gemu-interfaces'
import { buildBus } from 'gemu-bus'
import { buildMemory } from 'gemu-memory'
import { buildRom } from 'gemu-rom'
import { buildCpu6502 } from 'gemu-6502'
import { clockCommand } from './commands/clockCommand'
import { resetCommand } from './commands/resetCommand'
import * as CpuState from 'gemu-6502/dist/domain/State'
import * as MemoryState from 'gemu-memory/dist/domain/State'

export default interface Nes {
    clockCommand: Command,
    resetCommand: Command,
    cpuStore: Store<CpuState.default>,
    memoryStore: Store<MemoryState.default>
}

const attachComponentWithMirroredRanges = (bus: Bus, component: Component, ranges: Range[]): void => {
    ranges.forEach(range => {
        bus.attachComponentCommand({ range, component })
    })
}

export const buildNes = (storeFactory: StoreFactory, romData: number[]): Nes => {
    const bus = buildBus(storeFactory.buildStore())
    const cpuStore = storeFactory.buildStore<CpuState.default>()
    const cpu = buildCpu6502(bus, cpuStore)

    const memoryStore = storeFactory.buildStore<MemoryState.default>()
    const memory = buildMemory(memoryStore, 80)
    const memoryRanges = [
        { start: 0x0000, finish: 0x07ff },
        { start: 0x0800, finish: 0x0fff },
        { start: 0x1000, finish: 0x17ff },
        { start: 0x1800, finish: 0x1fff }
    ]
    attachComponentWithMirroredRanges(bus, memory, memoryRanges)
    
    const rom = buildRom(storeFactory.buildStore(), romData)
    const romRanges = [
        { start: 0x8000, finish: 0xbfff },
        { start: 0xc000, finish: 0xffff }
    ]
    attachComponentWithMirroredRanges(bus, rom, romRanges)

    return {
        clockCommand: clockCommand(cpu),
        resetCommand: resetCommand(cpu),
        cpuStore,
        memoryStore
    }
}
