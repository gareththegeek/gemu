import { RangedComponent } from 'gemu-interfaces'

export const writeToComponent = (rangedComponent: RangedComponent, address: number, value: number) => {
    const {
        component,
        range
    } = rangedComponent

    component.writeCommand(address - range.start, value)
}
