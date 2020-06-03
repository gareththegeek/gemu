export const byte = (address: number): string => address
    .toString(16)
    .toUpperCase()
    .padStart(2, '0')
