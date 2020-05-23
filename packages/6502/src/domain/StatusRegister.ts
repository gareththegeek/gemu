export default interface StatusRegister {
    negative: boolean
    overflow: boolean
    decimal: boolean
    irqDisable: boolean
    zero: boolean
    carry: boolean
}
