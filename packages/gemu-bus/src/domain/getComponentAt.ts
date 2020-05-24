import State from './State'
import RangedComponent from 'gemu-interfaces/dist/RangedComponent'

export const getComponentAt = (state: State, address: number): RangedComponent => 
    state.components.find(x =>
        x.range.start <= address
            && x.range.finish >= address)
