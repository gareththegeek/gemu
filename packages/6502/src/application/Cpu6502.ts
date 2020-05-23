import Command from './Command'
import Query from './Query'
import State from '../domain/State'
import Bus from '../infrastructure/Bus'
import Store from '../persistance/Store'
import stateQuery from './queries/stateQuery'
import resetCommand from './commands/resetCommand'
import clockCommand from './commands/clockCommand'
import irqCommand from './commands/irqCommand'
import nmiCommand from './commands/nmiCommand'

export default interface Cpu6502 {
    stateQuery: Query<State>
    resetCommand: Command
    clockCommand: Command
    irqCommand: Command
    nmiCommand: Command
}

export const createCpu6502 = (bus: Bus, store: Store) => ({
    stateQuery: stateQuery(store),
    resetCommand: resetCommand(store),
    clockCommand: clockCommand(bus, store),
    irqCommand: irqCommand(store),
    nmiCommand: nmiCommand(store)
})
