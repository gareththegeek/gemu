import Store from '../../persistance/Store'
import Command from '../Command'
import { buildResetEvent } from '../../domain/events/buildResetEvent'

const resetCommand = (store: Store): Command =>
    () => store.write(buildResetEvent())

export default resetCommand
