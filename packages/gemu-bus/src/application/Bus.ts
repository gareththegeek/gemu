import Bus from 'gemu-interfaces/dist/Bus'
import { readQuery } from './queries/readQuery'
import { writeCommand } from './commands/writeCommand'

export const buildBus = (): Bus => ({
    readQuery,
    writeCommand
})
