type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

type Event<T> = DeepPartial<T>

export default Event
