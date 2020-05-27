import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const nop = (_: State, __: Bus, ___: number): Event<State> => ({})

export default nop
