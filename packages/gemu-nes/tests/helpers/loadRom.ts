import * as fs from 'fs'
import NesRomImage from 'gemu-nes-rom-loader/dist/domain/NesRomImage'
import { buildNesRomLoader } from 'gemu-nes-rom-loader/dist/application/NesRomLoader'

export const loadRom = (filename: string): NesRomImage => {
    const loader = buildNesRomLoader()
    const data = fs.readFileSync(filename)
    return loader.readRomQuery(data)
}
