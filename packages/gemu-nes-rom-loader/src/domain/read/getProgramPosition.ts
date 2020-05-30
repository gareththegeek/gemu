import DataPosition from '../DataPosition'
import { PRG_ROM_IDX, HEADER_SIZE, PROGRAM_PAGE_SIZE } from '../constants'

export const getProgramPosition = (data: number[]): DataPosition => ({
    index: HEADER_SIZE,
    size: data[PRG_ROM_IDX] * PROGRAM_PAGE_SIZE
})
