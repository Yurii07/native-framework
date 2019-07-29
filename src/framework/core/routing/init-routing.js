import {_} from "framework/tools/util"
import {RoutingModule} from "./routing.module"

export function initRouting(routes) {
    if(_.isUndefined(routes)) return

    let routing = new RoutingModule(routes)
    routing.init()
}