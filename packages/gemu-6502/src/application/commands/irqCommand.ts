import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import Command from 'gemu-interfaces/src/Command'
import { buildIrqEvent } from '../../domain/events/buildIrqEvent'

const irqCommand = (store: Store<State>): Command =>
    () => {
        if (store.read().status.irqDisable) {
            return
        }
        store.write(buildIrqEvent())
    }

export default irqCommand
