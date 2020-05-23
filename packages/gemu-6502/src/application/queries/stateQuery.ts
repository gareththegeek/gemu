import Store from '../../persistance/Store'
import Query from '../Query'
import State from '../../domain/State'

const stateQuery = (store: Store): Query<State> =>
    () => store.read()

export default stateQuery
