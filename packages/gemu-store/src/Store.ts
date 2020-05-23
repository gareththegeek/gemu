import Store from 'gemu-persistance/dist/Store'
import Event from 'gemu-persistance/dist/Event'
import * as _ from 'lodash'

export const buildStore = <T>(): Store<T> => {
    let state: T
    return {
        read: () => _.cloneDeep(state),
        write: (event: Event<T>) => state = _.merge({}, state, event)
    }
}
