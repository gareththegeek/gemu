import Store from 'gemu-interfaces/dist/Store'
import Component from 'gemu-interfaces/dist/Component'
import Command from 'gemu-interfaces/dist/Command'
import State from '../domain/State'
import { readQuery } from './queries/readQuery'
import { initialiseCommand } from './commands/initialiseCommand'

export default interface Rom extends Component {
    initialiseCommand: Command
}

export const buildRom = (store: Store<State>): Rom => ({
    readQuery: readQuery(store),
    initialiseCommand: initialiseCommand(store),
    writeCommand: () => { /* Stub */ }
})
