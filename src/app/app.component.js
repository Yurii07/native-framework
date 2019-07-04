import { WFMComponent } from "../framework/index";

class AppComponent extends WFMComponent {
   constructor(config){
       super(config)
   }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <div><h4>App Component works!</h4></div>
    `
});