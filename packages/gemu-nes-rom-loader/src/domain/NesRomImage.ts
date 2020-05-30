import NesRomImageFlags from './NesRomImageFlags'
import { NesRomImageVersion } from './NesRomImageVersion'

export default interface NesRomImage {
    Version: NesRomImageVersion
    Flags: NesRomImageFlags
    ProgramData: number[]
    CharacterData: number[]
}
