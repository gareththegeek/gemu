import Command from 'gemu-interfaces/dist/Command'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'

export const writeCommand = (store: Store<State>): Command =>
    (address: number, value: number): void => {}
