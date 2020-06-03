import { Store } from 'gemu-interfaces'
import { Event } from 'gemu-interfaces'
import { State } from 'gemu-rom'
import * as _ from 'lodash'

export const buildRomStore = (): Store<State> => {
    let state = { data: [] } as State
    return {
        read: () => ({
            ...state,
            data: [...state.data]
        }),
        write: (event: Event<State>) => state = _.merge({}, state, event),
        overwrite: (nextState: State) => state = _.merge({}, nextState)
    }
}
