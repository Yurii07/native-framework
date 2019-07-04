import {WFMModule} from "../framework/index";
import {appComponent} from "./app.component";
import {appHeader} from "./common/app.header";

class AppModule extends WFMModule {
   constructor(config) {
       super(config)
   }
}

export const appModule = new AppModule({
    components: [
        appComponent,
        appHeader
    ]
});