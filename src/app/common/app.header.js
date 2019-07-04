import {WFMComponent} from "../../framework";

class AppHeader extends WFMComponent{
    constructor(config){
        super(config)
    }

}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
          <nav class="indigo">
            <div class="nav-wrapper">
              <a href="#" class="brand-logo" style="margin-left: 20px;">Native Framework</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="#">Sass</a></li>
                <li><a href="#">Components</a></li>
              </ul>
            </div>
          </nav>
    `
})