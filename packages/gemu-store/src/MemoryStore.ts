import { Store } from 'gemu-interfaces'
import { Event } from 'gemu-interfaces'
import { State } from 'gemu-memory'
import * as _ from 'lodash'

export const buildMemoryStore = (): Store<State> => {
    let state = {} as State
    return {
        read: () => ({
            pages: [...state.pages.map((page) => ({ data: [...page.data] }))]
        }),
        write: (event: Event<State>) => (state = _.merge({}, state, event)),
        overwrite: (nextState: State) => (state = _.merge({}, nextState))
    }
}
