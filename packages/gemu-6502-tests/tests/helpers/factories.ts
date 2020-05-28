import {
    System,
    BusState,
    BusSystemComponent,
    CpuSystemComponent,
    Cpu6502State,
    MemoryState,
    MemorySystemComponent,
    RomSystemComponent,
    RomState
} from '../System'
import { buildBus } from 'gemu-bus'
import { buildStore } from 'gemu-store'
import { buildCpu6502 } from 'gemu-6502'
import { Bus, Range } from 'gemu-interfaces'
import { buildMemory } from 'gemu-memory'
import { buildRom } from 'gemu-rom'

const PAGE_SIZE = 0x100

const buildBusSystemComponent = (): BusSystemComponent => {
    const store = buildStore<BusState>()
    const component = buildBus(store)
    return {
        component,
        store
    }
}

const buildCpuSystemComponent = (bus: Bus): CpuSystemComponent => {
    const store = buildStore<Cpu6502State>()
    const component = buildCpu6502(bus, store)
    return {
        component,
        store
    }
}

const buildMemorySystemComponent = (bus: Bus, range: Range): MemorySystemComponent => {
    const store = buildStore<MemoryState>()
    const pageCount = (range.finish + 1 - range.start) / PAGE_SIZE
    const component = buildMemory(store, pageCount)
    bus.attachComponentCommand({
        component,
        range
    })
    return {
        component,
        store,
        range
    }
}

const buildRomSystemComponent = (bus: Bus, range: Range): RomSystemComponent => {
    const store = buildStore<RomState>()
    const component = buildRom(store, [])
    bus.attachComponentCommand({
        component,
        range
    })
    return {
        component,
        store,
        range
    }
}

export const build6502System = (): System => {
    const bus = buildBusSystemComponent()
    const cpu = buildCpuSystemComponent(bus.component)
    const memory = buildMemorySystemComponent(bus.component, { start: 0x2000, finish: 0x3fff })
    const zeroPage = buildMemorySystemComponent(bus.component, { start: 0x00, finish: 0xff })
    const rom = buildRomSystemComponent(bus.component, { start: 0xff00, finish: 0xffff })

    return {
        bus,
        cpu,
        memory,
        zeroPage,
        rom
    }
}
