import Event from 'gemu-interfaces/dist/Event'
import State from '../State'
import Bus from 'gemu-interfaces/dist/Bus'

const nop = (_: State, __: Bus, ___: number): Event<State> => ({})

export default nop
