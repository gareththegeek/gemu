import State from './State'

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

type Event = DeepPartial<State>

export default Event
