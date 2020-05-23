import Bus from '../../infrastructure/Bus'

const fetchOperand = (bus: Bus, address: number, size: number): number[] =>
    new Array(size).fill(0).map((_, index) => bus.read(address + index))

export default fetchOperand
