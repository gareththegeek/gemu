import Store from './Store'

export default interface StoreFactory {
    buildStore<T>(): Store<T>
    buildCpu6502Store<T>(): Store<T>
    buildMemoryStore<T>(): Store<T>
    buildRomStore<T>(): Store<T>
}
