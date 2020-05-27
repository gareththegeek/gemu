import { Command } from 'gemu-interfaces'
import { RangedComponent } from 'gemu-interfaces'
import { Store } from 'gemu-interfaces'
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
