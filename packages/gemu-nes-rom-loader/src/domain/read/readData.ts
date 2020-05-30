import DataPosition from '../DataPosition'

export const readData = (position: DataPosition, data: number[]): number[] =>
    data.slice(position.index, position.index + position.size)
