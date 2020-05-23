import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sec = (_: State, __: Bus, ___: number): Event => ({
    status: {
        carry: true
    }
})

export default sec
