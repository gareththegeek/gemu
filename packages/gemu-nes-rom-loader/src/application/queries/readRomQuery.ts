import NesRomImage from '../../domain/NesRomImage'
import { readRomImage } from '../../domain/read/readRomImage'

export const readRomQuery = () =>
    (data: Buffer): NesRomImage =>
        readRomImage(Array.from(data))
