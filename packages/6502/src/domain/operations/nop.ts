import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const nop = (_: State, __: Bus, ___: number): Event => ({})

export default nop
