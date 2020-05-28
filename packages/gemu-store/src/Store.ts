import { Store } from 'gemu-interfaces'
import { Event } from 'gemu-interfaces'
import * as _ from 'lodash'

export const buildStore = <T>(): Store<T> => {
    let state = {} as T
    return {
        read: () => _.cloneDeep(state),
        write: (event: Event<T>) => state = _.merge({}, state, event),
        overwrite: (nextState: T) => state = _.merge({}, nextState)
    }
}
