import { Component, Input, OnInit } from '@angular/core';
import { TimelinePoint } from './';

@Component({
    moduleId: module.id,
    selector: 'tl-event',
    templateUrl: 'timelinePoint.component.html',
    styleUrls: ['../../resources/css/timeline/timelinePoint.component.css', '../../resources/css/references/references.component.css']
})
export class TimelinePointComponent implements OnInit {
    @Input() point: TimelinePoint;
    @Input() isEven: boolean;
    
    ngOnInit() { }
}