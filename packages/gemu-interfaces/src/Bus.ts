import Component from "./Component";
import RangedComponent from "./RangedComponent";

export default interface Bus extends Component {
    attachComponentCommand: (rangedComponent: RangedComponent) => void
    detachComponentCommand: (rangedComponent: RangedComponent) => void
}
