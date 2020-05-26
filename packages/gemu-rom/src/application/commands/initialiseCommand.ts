import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'

export const initialiseCommand = (store: Store<State>) =>
    (data: number[]): void => {
        const state = store.read()
        if (state?.initialised) {
            return
        }

        store.write({
            data,
            initialised: true
        })
    }
