import Command from 'gemu-interfaces/dist/Command'
import RangedComponent from 'gemu-interfaces/dist/RangedComponent'
import Store from 'gemu-interfaces/dist/Store'
import State from '../../domain/State'
import { canAttachComponent } from '../../domain/canAttachComponent'

export const attachComponentCommand = (store: Store<State>): Command =>
    (rangedComponent: RangedComponent): void => {
        const state = store.read()

        if (canAttachComponent(state, rangedComponent)) {
            store.write({
                components: [rangedComponent]
            })
        }
    }
