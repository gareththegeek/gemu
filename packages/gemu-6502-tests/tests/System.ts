import { Cpu6502 } from 'gemu-6502'
import { Bus, Store } from 'gemu-interfaces'
import { Rom } from 'gemu-rom'
import { Memory } from 'gemu-memory'
import { Range } from 'gemu-interfaces'
import * as BusStateUnit from 'gemu-bus/dist/domain/State'
import * as Cpu6502StateUnit from 'gemu-6502/dist/domain/State'
import * as MemoryStateUnit from 'gemu-memory/dist/domain/State'
import * as RomStateUnit from 'gemu-rom/dist/domain/State'

export type BusState = BusStateUnit.default
export type Cpu6502State = Cpu6502StateUnit.default
export type MemoryState = MemoryStateUnit.default
export type RomState = RomStateUnit.default

interface SystemComponent<TComponent, TState> {
    component: TComponent
    range?: Range
    store: Store<TState>
}

export type BusSystemComponent = SystemComponent<Bus, BusState>
export type CpuSystemComponent = SystemComponent<Cpu6502, Cpu6502State>
export type MemorySystemComponent = SystemComponent<Memory, MemoryState>
export type RomSystemComponent = SystemComponent<Rom, RomState>

export interface System {
    bus: BusSystemComponent
    cpu: CpuSystemComponent
    memory: MemorySystemComponent
    zeroPage: MemorySystemComponent
    rom: RomSystemComponent
}
