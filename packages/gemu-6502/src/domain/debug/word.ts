export const word = (address: number): string => address
    .toString(16)
    .toUpperCase()
    .padStart(4, '0')
