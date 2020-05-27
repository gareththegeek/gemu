import { Command, StoreFactory } from 'gemu-interfaces'
import { buildBus } from 'gemu-bus'
import { buildMemory } from 'gemu-memory'
import { buildRom } from 'gemu-rom'
import { buildCpu6502 } from 'gemu-6502'
import { clockCommand } from './commands/clockCommand'

export default interface Nes {
    clockCommand: Command
}

export const buildNes = (storeFactory: StoreFactory): Nes => {
    const bus = buildBus(storeFactory.buildStore())
    const cpu = buildCpu6502(bus, storeFactory.buildStore())
    bus.attachComponentCommand({
        range: { start: 0, finish: 1 },
        component: buildMemory(storeFactory.buildStore(), 1)
    })
    bus.attachComponentCommand({
        range: { start: 2, finish: 3 },
        component: buildRom(storeFactory.buildStore(), [])
    })
    return {
        clockCommand: clockCommand(cpu)
    }
}
