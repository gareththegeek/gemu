import NesRomImage from '../NesRomImage'
import { isValidImage } from './isValidImage'
import { getProgramPosition } from './getProgramPosition'
import { getCharacterPosition } from './getCharacterPosition'
import { readData } from './readData'

//https://wiki.nesdev.com/w/index.php/INES

export const readRomImage = (data: number[]): NesRomImage => {
    if (!isValidImage(data)) {
        throw Error('Unsupported file format')
    }

    const programPosition = getProgramPosition(data)
    const characterPosition = getCharacterPosition(data)

    return {
        Version: '1', // TODO
        Flags: {},
        ProgramData: readData(programPosition, data),
        CharacterData: readData(characterPosition, data)
    }
}
