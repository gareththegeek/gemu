import State from '../domain/State'
import Event from '../domain/Event'

export default interface Store {
    read: () => State
    write: (state: Event) => void
}
