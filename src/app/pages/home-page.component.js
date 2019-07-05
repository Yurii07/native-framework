import {WFMComponent} from "../../framework";

class HomePageComponent extends WFMComponent{
    constructor(config) {
        super(config)
    }
}

export const homePageComponent = new HomePageComponent({
   selector: 'app-home-page',
   template: `
      <div class="row">
        <div class="col s6 offset-s3" style="margin-top: 40px;">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Main Page</span>
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#">Go to another page</a>
            </div>
          </div>
        </div>
      </div>
   `
});