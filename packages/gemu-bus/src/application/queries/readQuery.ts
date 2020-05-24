import Query from 'gemu-interfaces/dist/Query'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'

export const readQuery = (store: Store<State>): Query<number> =>
    (address: number): number => { return 0 }
