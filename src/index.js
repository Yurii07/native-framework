// enter point


import { bootstrap } from "./framework/core/bootstrap";
import { appModule } from "./app/app.module";
import { wfm } from './framework/index'

wfm.delay(1500).then(() => {
    bootstrap(appModule)
});