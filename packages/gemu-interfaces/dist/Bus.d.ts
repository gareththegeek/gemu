export default interface Bus {
    readQuery: (address: number) => number;
    writeCommand: (address: number, value: number) => void;
}
