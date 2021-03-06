import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import Command from 'gemu-interfaces/src/Command'
import { buildNmiEvent } from '../../domain/events/buildNmiEvent'

const nmiCommand = (store: Store<State>): Command =>
    () => store.write(buildNmiEvent())

export default nmiCommand
