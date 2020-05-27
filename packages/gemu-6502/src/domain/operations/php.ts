import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'
import getStatusByte from '../bitwise/getStatusByte'
import getStackAddress from '../bitwise/getStackAddress'
import toByte from '../bitwise/toByte'
import { B_PHP } from '../constants'

const php = (state: State, bus: Bus, _: number): Event<State> => {
    const value = getStatusByte(state.status) | B_PHP
    bus.writeCommand(getStackAddress(state.sp), value)
    return {
        sp: toByte(state.sp - 1)
    }
}

export default php
