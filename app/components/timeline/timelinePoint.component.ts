import { Component, Input, OnInit, HostListener } from '@angular/core';
import { TimelinePoint } from './';
import { ReferencesService, Reference, ReferencesComponent } from '../references';

@Component({
    moduleId: module.id,
    selector: 'tl-event',
    templateUrl: 'timelinePoint.component.html',
    directives: [ ReferencesComponent ],
    styleUrls: ['../../resources/css/timeline/timelinePoint.component.css', '../../resources/css/references/references.component.css']
})
export class TimelinePointComponent implements OnInit {
    @Input() point: TimelinePoint;
    @Input() isEven: boolean;
    @Input() color: string;
    referencesActive: boolean = false;
    
    constructor(private referencesService: ReferencesService) { }

    ngOnInit() { 
        this.referencesService.getReferences();
    }

    toggleReferences() {
        this.referencesActive = !this.referencesActive;
    }
}