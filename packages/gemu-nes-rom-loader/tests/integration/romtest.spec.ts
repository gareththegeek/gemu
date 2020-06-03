import { expect } from 'chai'
import * as path from 'path'
import * as fs from 'fs'
import { readRomQuery } from '../../src/application/queries/readRomQuery'

describe('Nes ROM Loader', () => {
    describe('Integration', () => {
        const byteCheck = (actual: number[], check: { offset: number, data: number[] }): void => {
            expect(actual.slice(check.offset, check.offset + check.data.length)).to.deep.equal(check.data)
        }

        const roms = [{ 
            filename: 'nestest.nes',
            expected: {
                programSize: 0x4000,
                characterSize: 0x2000,
                programCheck: { offset: 0x00, data: [0x4C, 0xF5, 0xC5, 0x60, 0x78, 0xD8, 0xA2, 0xFF, 0x9A, 0xAD, 0x02, 0x20, 0x10, 0xFB, 0xAD, 0x02] },
                characterCheck: { offset: 0x60, data: [0x7C, 0xFE, 0x00, 0xC0, 0xC0, 0xFE, 0x7C, 0x00, 0x7C, 0xFE, 0x00, 0xC0, 0xC0, 0xFE, 0x7C, 0x00] }
            }
        }]
        roms.forEach(rom => {
            it(`should successfully read rom: '${rom.filename}'`, () => {
                const romPath = path.resolve(__dirname, `../roms/${rom.filename}`)
                const data = fs.readFileSync(romPath)

                const uut = readRomQuery()
                const actual = uut(data)

                expect(actual.Version).to.be.equal('1')
                expect(actual.ProgramData.length).to.be.equal(rom.expected.programSize)
                expect(actual.CharacterData.length).to.be.equal(rom.expected.characterSize)
                byteCheck(actual.ProgramData, rom.expected.programCheck)
                byteCheck(actual.CharacterData, rom.expected.characterCheck)
            })
        })
    })
})
