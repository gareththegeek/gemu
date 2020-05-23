import Event from '../Event'
import State from '../State'
import Bus from '../../infrastructure/Bus'

const sed = (_: State, __: Bus, ___: number): Event => ({
    status: {
        decimal: true
    }
})

export default sed
