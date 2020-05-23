import Store from '../../persistance/Store'
import Command from '../Command'
import { buildIrqEvent } from '../../domain/events/buildIrqEvent'

const irqCommand = (store: Store): Command =>
    () => {
        if (store.read().status.irqDisable) {
            return
        }
        store.write(buildIrqEvent())
    }

export default irqCommand
