import { Command } from 'gemu-interfaces'
import { Store } from 'gemu-interfaces'
import State from '../../domain/State'
import { getComponentAt } from '../../domain/getComponentAt'
import { writeToComponent } from '../../domain/writeToComponent'

export const writeCommand = (store: Store<State>): Command =>
    (address: number, value: number): void => {
        const state = store.read()
        
        const component = getComponentAt(state, address)
        if (!component) {
            return
        }

        writeToComponent(component, address, value)
    }
