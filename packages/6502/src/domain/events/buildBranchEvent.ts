import Event from '../Event'
import State from '../State'
import isPageCrossed from '../bitwise/isPageCrossed'

export const buildBranchEvent = (state: State, parameter: number, branch: boolean): Event => {
    const pageBoundary = isPageCrossed(state.pc, parameter)
    return {
        pc: branch ? state.pc + parameter : state.pc,
        cycles: branch
            ? (pageBoundary ? state.cycles + 2 : state.cycles + 1)
            : state.cycles
    }
}
