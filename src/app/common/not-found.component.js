import { WFMComponent } from "framework"

class NotFound extends WFMComponent{
    constructor(config){
        super(config)
    }

}

export const notFound = new NotFound({
    selector: 'app-not-found',
    template: `
         <div class="not-found__block">
             <div>
                 <h2 class="red darken-1">Page not found</h2>
                 <a href="#">Go to main page</a>
            </div>
        </div>
    `,
    styles: `
    .not-found__block { display: flex; align-items: center; justify-content: center; }
    `
})