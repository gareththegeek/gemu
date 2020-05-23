import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const clv = (_: State, __: Bus, ___: number): Event => ({
    status: {
        overflow: false
    }
})

export default clv
