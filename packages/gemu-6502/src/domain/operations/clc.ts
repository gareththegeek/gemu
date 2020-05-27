import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const clc = (_: State, __: Bus, ___: number): Event<State> => ({
    status: {
        carry: false
    }
})

export default clc
