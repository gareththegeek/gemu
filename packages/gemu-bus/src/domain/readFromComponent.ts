import RangedComponent from 'gemu-interfaces/dist/RangedComponent'

export const readFromComponent = (rangedComponent: RangedComponent, address: number): number => {
    const {
        component,
        range
    } = rangedComponent

    return component.readQuery(address - range.start)
}
