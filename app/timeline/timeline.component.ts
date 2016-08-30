import { Component, OnInit, HostListener } from '@angular/core';

import { TimelinePointComponent, TimelinePointService, TimelinePoint } from './';

@Component({
    moduleId: module.id,
    selector: 'app-timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['../resources/css/timeline/timeline.component.css'],
    directives: [TimelinePointComponent]
})
export class TimelineComponent implements OnInit {
    points: TimelinePoint[];
    selectedId: number;

    constructor(private pointService: TimelinePointService) { }

    ngOnInit() { 
        this.pointService.getPoints()
          .subscribe((points) => this.points = points.sort(this.sortByDate));
    }

    selectEvent(id: number) {
        this.selectedId = id;
    }

    private generatePointPosition(date: Date) {
        var points = this.points,
            oldest = points[0].date.getTime(),
            newest = points[points.length - 1].date.getTime(),
            adjusted = date.getTime() - oldest;
        return adjusted/(newest - oldest) * 100;
    }

    private sortByDate(eventA: TimelinePoint, eventB: TimelinePoint) : number {
        return eventA.date.getTime() - eventB.date.getTime();
    }

}