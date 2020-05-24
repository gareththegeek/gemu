import Bus from 'gemu-interfaces/dist/Bus'
import Store from 'gemu-interfaces/dist/Store'
import State from '../domain/State'
import { readQuery } from './queries/readQuery'
import { writeCommand } from './commands/writeCommand'
import { attachComponentCommand } from './commands/attachComponentCommand'

export const buildBus = (store: Store<State>): Bus => ({
    readQuery: readQuery(store),
    writeCommand: writeCommand(store),
    attachComponentCommand: attachComponentCommand(store)
})
