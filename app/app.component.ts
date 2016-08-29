import { Component, OnInit, HostListener } from '@angular/core';
import { TimelineComponent, TimelinePointService } from './timeline/';
import { NavComponent } from './nav/nav.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['resources/css/app.component.css'],
    directives: [TimelineComponent, NavComponent],
    providers: [TimelinePointService]
})

export class AppComponent implements OnInit {
    height: number;

    ngOnInit() { 
        this.onResize();
    }

    @HostListener('window:resize', ['$event']) onResize() {
        this.height = window.innerHeight - 50;
    }
}
