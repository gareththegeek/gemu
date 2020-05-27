import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import Command from 'gemu-interfaces/src/Command'
import { buildResetEvent } from '../../domain/events/buildResetEvent'

const resetCommand = (store: Store<State>): Command =>
    () => store.write(buildResetEvent())

export default resetCommand
