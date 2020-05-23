import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const cld = (_: State, __: Bus, ___: number): Event => ({
    status: {
        decimal: false
    }
})

export default cld
