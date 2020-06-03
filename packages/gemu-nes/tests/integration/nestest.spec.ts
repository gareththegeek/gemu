import { buildNes } from '../../src/application/Nes'
import {
    buildStore,
    buildCpu6502Store,
    buildMemoryStore,
    buildRomStore
} from 'gemu-store'
import { loadRom } from '../helpers/loadRom'
import { expect, assert } from 'chai'
import * as fs from 'fs'
import * as path from 'path'
import * as PubSub from 'pubsub-js'
import { serialiseState } from 'gemu-6502-disassembler/dist/serialiseState'
import { StoreFactory } from 'gemu-interfaces'

describe('NES', () => {
    describe('Integration', () => {
        describe('nestest.nes', () => {
            it('should pass tests', () => {
                
                PubSub.subscribe('OPERATION_MESSAGE', (_: string, message: any): void => {
                    const text = serialiseState(
                        message.state,
                        message.instruction,
                        message.operand,
                        message.result)

                    const logPath = path.resolve(__dirname, '../../logs/6502.log')
                    fs.appendFileSync(logPath, text)
                })

                const romPath = path.resolve(__dirname, '../roms/nestest.nes')
                const data = loadRom(romPath)
                const storeFactory = {
                    buildStore,
                    buildCpu6502Store,
                    buildMemoryStore,
                    buildRomStore
                } as StoreFactory
                const system = buildNes(storeFactory, data.ProgramData, PubSub)
                
                system.resetCommand()

                while (true) {
                    system.clockCommand()
                    system.cpuStore.write({ cycles: 0 })
                    const cpuState = system.cpuStore.read()
                    if (cpuState.status.break) {
                        const mem = system.memoryStore.read()
                        const result = mem.pages[0].data[2] | mem.pages[0].data[3] << 8
                        expect(result).to.be.equal(0)
                        assert.fail('Unexpected BRK statement in test')
                    }
                }
            })
        })
    })
})
