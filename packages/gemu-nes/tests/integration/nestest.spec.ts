import { buildNes } from '../../src/application/Nes'
import { buildStore } from 'gemu-store'
//import { loadRom } from '../helpers/loadRom'

import * as fs from 'fs'
import NesRomImage from 'gemu-nes-rom-loader/dist/domain/NesRomImage'
import { buildNesRomLoader } from 'gemu-nes-rom-loader/dist/application/NesRomLoader'

const loadRom = (filename: string): NesRomImage => {
    const loader = buildNesRomLoader()
    const data = fs.readFileSync(filename)
    return loader.readRomQuery(data)
}


describe('NES', () => {
    describe('Integration', () => {
        describe('nestest.nes', () => {
            it('should pass tests', () => {
                const data = loadRom('./tests/roms/nestest.nes')
                const system = buildNes({ buildStore }, data.ProgramData)

                system.resetCommand()

                let i = 100
                while (i-- > 0) {
                    system.clockCommand()
                }
            })
        })
    })
})
