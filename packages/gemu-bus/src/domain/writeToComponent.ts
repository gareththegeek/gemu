import RangedComponent from 'gemu-interfaces/dist/RangedComponent'

export const writeToComponent = (rangedComponent: RangedComponent, address: number, value: number) => {
    const {
        component,
        range
    } = rangedComponent

    component.writeCommand(address - range.start, value)
}
