import Query from 'gemu-interfaces/dist/Query'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import { getComponentAt } from '../../domain/getComponentAt'
import { readFromComponent } from '../../domain/readFromComponent'

export const readQuery = (store: Store<State>): Query<number> =>
    (address: number): number => {
        const state = store.read()

        const component = getComponentAt(state, address)

        if (component) {
            return readFromComponent(component, address)
        }
    }
