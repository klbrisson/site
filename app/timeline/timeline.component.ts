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
    selectedId: number;

    constructor(private _eventService: EventService) { }

    ngOnInit() { 
        this._eventService.getEvents()
          .then((events) => this.events = events.sort(this.sortByDate))
          .catch((err) => {
            console.log(err);
          });
    }

    selectEvent(id: number) {
        this.selectedId = id;
    }

    private sortByDate(eventA: any, eventB: any) {
        return eventA.date > eventB.date;
    }

}