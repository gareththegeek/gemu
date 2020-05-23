export default interface Store<T> {
    read: () => T
    write: (event: Event) => void
}
