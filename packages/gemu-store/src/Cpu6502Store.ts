import { Store } from 'gemu-interfaces'
import { Event } from 'gemu-interfaces'
import { State } from 'gemu-6502'

export const buildCpu6502Store = (): Store<State> => {
    let state: State = {} as State
    return {
        read: () => ({
            ...state,
            status: {
                ...state.status
            }
        }),
        write: (event: Event<State>) => state = {
            ...state,
            ...event,
            status: {
                ...state.status,
                ...event.status
            }
        },
        overwrite: (nextState: State) => state = {
            ...nextState,
            status: {
                ...nextState.status
            }
        }
    }
}
