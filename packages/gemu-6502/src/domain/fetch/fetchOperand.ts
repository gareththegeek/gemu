import { Bus } from 'gemu-interfaces'

const fetchOperand = (bus: Bus, address: number, size: number): number[] =>
    new Array(size).fill(0).map((_, index) => bus.readQuery(address + index))

export default fetchOperand
