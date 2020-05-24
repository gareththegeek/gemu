export default interface Component {
    readQuery: (address: number) => number;
    writeCommand: (address: number, value: number) => void;
}
