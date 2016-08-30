import { Component, OnInit, HostListener } from '@angular/core';
import { TimelinePointService, APP_COMPONENTS } from './components';

@Component({
    moduleId: module.id,
    selector: 'tl-app',
    templateUrl: 'app.component.html',
    styleUrls: ['resources/css/app.component.css'],
    directives: [APP_COMPONENTS],
    providers: [TimelinePointService]
})

export class AppComponent implements OnInit {
    // height: number;

    ngOnInit() {
       // this.onResize();
    }

    // @HostListener('window:resize', ['$event']) onResize() {
    //     this.height = window.innerHeight - 50;
    // }
}
