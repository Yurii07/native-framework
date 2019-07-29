import {initComponents} from "framework/core/component/init-components"
import {initRouting} from "framework/core/routing/init-routing"

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapcomponent = config.bootstrap;
        this.routes = config.routes;
    }

    start() {
        initComponents(this.bootstrapcomponent, this.components);
        initRouting(this.routes)
    }
}