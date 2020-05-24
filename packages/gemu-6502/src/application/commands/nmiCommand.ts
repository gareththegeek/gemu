import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import Command from '../Command'
import { buildNmiEvent } from '../../domain/events/buildNmiEvent'

const nmiCommand = (store: Store<State>): Command =>
    () => store.write(buildNmiEvent())

export default nmiCommand
