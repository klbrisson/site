import { Component } from '@angular/core';
import { TimelineComponent, TimelinePointService } from './timeline/index'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['resources/css/app.component.css'],
    directives: [TimelineComponent],
    providers: [TimelinePointService]
})

export class AppComponent {

}
