import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import { buildInitialiseEvent } from '../../domain/events/buildInitialiseEvent'

export const initialiseCommand = (store: Store<State>) =>
    (pageCount: number): void =>
        store.write(buildInitialiseEvent(pageCount))
