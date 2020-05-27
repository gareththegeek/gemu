import { Event } from 'gemu-interfaces'
import { Bus } from 'gemu-interfaces'
import {
    INITIALISATION_CYCLES,
    RESET_VECTOR
} from '../constants'
import littleEndian from '../bitwise/littleEndian'
import State from '../State'

export const buildInitialiseEvent = (bus: Bus): Event<State> => {
    const lo = bus.readQuery(RESET_VECTOR + 0)
    const hi = bus.readQuery(RESET_VECTOR + 1)
    const pc = littleEndian([lo, hi])
    return {
        pc,
        a: 0,
        x: 0,
        y: 0,
        sp: 0xff,
        irq: false,
        nmi: false,
        status: {
            negative: false,
            overflow: false,
            decimal: false,
            irqDisable: false,
            zero: false,
            carry: false
        },
        initialised: true,
        cycles: INITIALISATION_CYCLES
    }
}
