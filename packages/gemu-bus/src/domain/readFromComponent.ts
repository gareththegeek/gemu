import { RangedComponent } from 'gemu-interfaces'

export const readFromComponent = (rangedComponent: RangedComponent, address: number): number => {
    const {
        component,
        range
    } = rangedComponent

    return component.readQuery(address - range.start)
}
