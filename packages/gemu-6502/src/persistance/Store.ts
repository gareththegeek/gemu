import State from "../domain/State"
import * as PersistantStore from 'gemu-persistance/dist/Store'

export default interface Store extends PersistantStore.default<State> {}
