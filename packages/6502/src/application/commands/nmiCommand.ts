import Store from '../../persistance/Store'
import Command from '../Command'
import { buildNmiEvent } from '../../domain/events/buildNmiEvent'

const nmiCommand = (store: Store): Command =>
    () => store.write(buildNmiEvent())

export default nmiCommand
