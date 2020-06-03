import { buildNes } from '../../src/application/Nes'
import { buildStore } from 'gemu-store'
import { loadRom } from '../helpers/loadRom'
import { expect, assert } from 'chai'

describe('NES', () => {
    describe('Integration', () => {
        describe('nestest.nes', () => {
            it('should pass tests', () => {
                const data = loadRom('./tests/roms/nestest.nes')
                const system = buildNes({ buildStore }, data.ProgramData)
                
                system.resetCommand()

                while (true) {
                    system.clockCommand()
                    const cpuState = system.cpuStore.read()
                    if (cpuState.status.break) {
                        const mem = system.memoryStore.read()
                        const result = mem.pages[0].data[2] | mem.pages[0].data[3] << 8
                        // expect(result).to.be.equal(0)
                        //return
                        expect(result).to.be.equal(0)
                        assert.fail('Unexpected BRK statement in test')
                    }
                    // const mem = system.memoryStore.read()
                    // const result = mem.pages[0].data[2] | mem.pages[0].data[3] << 8
                    // if (result) {
                    //     // throw Error(result.toString())
                    //     const actual = fs.readFileSync('./tests/logs/6502.log', 'utf-8').split('\n')
                    //     const expected = fs.readFileSync('./tests/roms/nestest.log', 'utf-8').split('\n')

                    //     actual.forEach((_,idx) => {
                    //         expect(actual[idx].substr(0, 75)).to.equal(expected[idx].substr(0, 75))
                    //     })
                    // }
                }
            })
        })
    })
})
