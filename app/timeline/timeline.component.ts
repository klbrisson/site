import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event.component';
import { EventService } from './event.service'

@Component({
    moduleId: module.id,
    selector: 'app-timeline',
    templateUrl: 'timeline.component.html',
    directives: [EventComponent]
})
export class TimelineComponent implements OnInit {
    events: any[];

    constructor(private _eventService: EventService) { }

    ngOnInit() { 
        this._eventService.getEvents()
          .then((events) => this.events = events)
          .catch((err) => {
            console.log(err);
          });
    }
}