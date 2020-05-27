import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import Query from 'gemu-interfaces/src/Query'

const stateQuery = (store: Store<State>): Query<State> =>
    () => store.read()

export default stateQuery
