import { Command, StoreFactory, Component, Bus, Range, Store } from 'gemu-interfaces'
import { buildBus } from 'gemu-bus'
import { buildMemory, State as MemoryState } from 'gemu-memory'
import { buildRom, State as RomState } from 'gemu-rom'
import { buildCpu6502, State as CpuState } from 'gemu-6502'
import { clockCommand } from './commands/clockCommand'
import { resetCommand } from './commands/resetCommand'

export default interface Nes {
    clockCommand: Command,
    resetCommand: Command,
    cpuStore: Store<CpuState>,
    memoryStore: Store<MemoryState>
}

const attachComponentWithMirroredRanges = (bus: Bus, component: Component, ranges: Range[]): void => {
    ranges.forEach(range => {
        bus.attachComponentCommand({ range, component })
    })
}

export const buildNes = (storeFactory: StoreFactory, romData: number[], pubsub: any): Nes => {
    const bus = buildBus(storeFactory.buildStore())
    const cpuStore = storeFactory.buildCpu6502Store<CpuState>()
    const cpu = buildCpu6502(bus, cpuStore, pubsub)

    const memoryStore = storeFactory.buildMemoryStore<MemoryState>()
    const memory = buildMemory(memoryStore, 80)
    const memoryRanges = [
        { start: 0x0000, finish: 0x07ff },
        { start: 0x0800, finish: 0x0fff },
        { start: 0x1000, finish: 0x17ff },
        { start: 0x1800, finish: 0x1fff }
    ]
    attachComponentWithMirroredRanges(bus, memory, memoryRanges)
    
    const rom = buildRom(storeFactory.buildRomStore<RomState>(), romData)
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
