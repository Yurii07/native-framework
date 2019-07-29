import {WFMComponent, router} from "framework"

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config)

        this.data = {
            title: 'Main page works!!!',
            linkTitle: 'Go to another page!'

        }
    }

    events() {
        return {
            'click .js-link': 'goToTabs'
        }
    }

    goToTabs(event) {
        event.preventDefault()
        router.navigate('tabs')
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
      <div class="row">
        <div class="col s6 offset-s3 home__block">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ title }}</span>
              <p>I am a very simple card. I am good at containing small bits of information.</p>
            </div>
            <div class="card-action">
              <a href="#not-existing-path" class="js-link">{{linkTitle}}</a>
            </div>
          </div>
        </div>
      </div>
   `,
    styles: `
    .home__block { margin: 40px; }
    `
});