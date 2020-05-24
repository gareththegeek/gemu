import Command from 'gemu-interfaces/dist/Command'
import RangedComponent from 'gemu-interfaces/dist/RangedComponent'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'

export const detachComponentCommand = (store: Store<State>): Command =>
    (rangedComponent: RangedComponent): void => {}
