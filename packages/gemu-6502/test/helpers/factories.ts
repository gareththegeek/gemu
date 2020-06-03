import State from '../../src/domain/State'
import { SinonStubbedInstance } from 'sinon'
import { Bus, Store } from 'gemu-interfaces'
import sinon = require('sinon')

export const buildPubSub = () => ({
    publishSync: sinon.stub()
})

export const build6502State = (): State => ({
    pc: 1,
    a: 2,
    x: 3,
    y: 4,
    sp: 5,
    irq: false,
    nmi: false,
    status: {
        negative: true,
        overflow: true,
        decimal: true,
        irqDisable: true,
        break: true,
        zero: true,
        carry: true
    },
    initialised: true,
    cycles: 7
})

export const buildBus = (): SinonStubbedInstance<Bus> => ({
    readQuery: sinon.stub(),
    writeCommand: sinon.stub(),
    attachComponentCommand: sinon.stub()
})

export const buildStore = (): SinonStubbedInstance<Store<State>> => ({
    read: sinon.stub(),
    write: sinon.stub(),
    overwrite: sinon.stub()
})

// export interface I6502System {
//     cpu: I6502
//     memory: IRangedComponent
//     zeroPage: IRangedComponent
//     rom: IRangedComponent
// }

// export const build6502system = (): I6502System => {
//     const pubsub = pubSubFactory()
//     const bus = busFactory(pubsub)
//     const cpu = cpuFactory(bus)
//     const memory = rangeFactory(pubsub, memoryFactory({ from: 0x2000, to: 0x4000 }))
//     const zeroPage = rangeFactory(pubsub, memoryFactory({ from: 0x00, to: 0xff }))
//     const rom = rangeFactory(pubsub, romFactory({ from: 0xff00, to: 0xffff }))

//     return {
//         cpu,
//         memory,
//         zeroPage,
//         rom
//     }
// }
