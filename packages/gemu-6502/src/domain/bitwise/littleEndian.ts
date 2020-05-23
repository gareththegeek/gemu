const littleEndian = (data: Array<number>): number => data[0] | (data[1] << 8)

export default littleEndian
