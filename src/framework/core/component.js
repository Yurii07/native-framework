export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
    }

    render() {
        document.querySelector(this.selector).innerHTML = this.template;
    }
}