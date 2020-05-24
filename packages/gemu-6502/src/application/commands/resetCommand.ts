import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import Command from '../Command'
import { buildResetEvent } from '../../domain/events/buildResetEvent'

const resetCommand = (store: Store<State>): Command =>
    () => store.write(buildResetEvent())

export default resetCommand
