import {_} from "framework/tools/util";
import {renderComponent} from "./render-component";

export function initComponents (bootstrap, components) {
    if(_.isUndefined(bootstrap)) {
        throw  new Error(`Bootstrap component is not defined`)
    }


    [bootstrap, ...components].forEach(renderComponent)

}