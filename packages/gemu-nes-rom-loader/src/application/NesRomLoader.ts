import { Query } from 'gemu-interfaces'
import NesRomImage from '../domain/NesRomImage'
import { readRomQuery } from './queries/readRomQuery'

export default interface NesRomLoader {
    readRomQuery: Query<NesRomImage>
}

export const buildNesRomLoader = () => ({
    readRomQuery: readRomQuery()
})
