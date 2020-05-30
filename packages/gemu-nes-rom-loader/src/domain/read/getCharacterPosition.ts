import { getProgramPosition } from './getProgramPosition'
import DataPosition from '../DataPosition'
import { CHARACTER_PAGE_SIZE, CHR_ROM_IDX } from '../constants'

export const getCharacterPosition = (data: number[]): DataPosition => {
    const programPosition = getProgramPosition(data)

    return {
        index: programPosition.index + programPosition.size,
        size: data[CHR_ROM_IDX] * CHARACTER_PAGE_SIZE
    }
}
