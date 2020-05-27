import Store from './Store'

export default interface StoreFactory {
    buildStore<T>(): Store<T>
}
