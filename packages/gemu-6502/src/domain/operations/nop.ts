import Event from 'gemu-persistance/dist/Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const nop = (_: State, __: Bus, ___: number): Event<State> => ({})

export default nop
