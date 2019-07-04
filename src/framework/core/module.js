export class Module {
    constructor(config){
        this.components = config.components;
        this.bootstrapcomponent = config.bootstrap;
    }

    start() {
        this.initComponents()
    }
    initComponents(){
        this.bootstrapcomponent.render()
        this.components.forEach(c => c.render())
    }
}