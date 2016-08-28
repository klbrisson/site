import { Component, Input, OnInit } from '@angular/core';
import { TimelinePoint } from './'

@Component({
    moduleId: module.id,
    selector: 'app-event',
    templateUrl: 'timelinePoint.component.html',
    styleUrls: ['../resources/css/timeline/timelinePoint.component.css']
})
export class TimelinePointComponent implements OnInit {
    @Input() point: TimelinePoint;
    
    ngOnInit() { }
}