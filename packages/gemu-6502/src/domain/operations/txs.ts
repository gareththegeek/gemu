import { Event } from 'gemu-interfaces'
import State from '../State'
import { Bus } from 'gemu-interfaces'

const txs = (state: State, _: Bus, __: number): Event<State> => ({
    sp: state.x
})

export default txs
