import { WFMComponent } from "../framework/index";

class AppComponent extends WFMComponent {
   constructor(config){
       super(config)
   }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        <div><h4>App Component works!</h4></div>
    `
});