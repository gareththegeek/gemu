import Event from './Event'

export default interface Store<T> {
    read: () => T
    write: (event: Event<T>) => void
    overwrite: (state: T) => void
}
