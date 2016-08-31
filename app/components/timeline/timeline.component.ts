import { Component, OnInit, HostListener } from '@angular/core';

import { TimelinePointComponent, TimelinePointService, TimelinePoint } from './';
import { ReferencesService, Reference } from '../references';

@Component({
    moduleId: module.id,
    selector: 'tl-timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['../../resources/css/timeline/timeline.component.css'],
    directives: [TimelinePointComponent]
})
export class TimelineComponent implements OnInit {
    points: TimelinePoint[];
    references: { };

    constructor(private pointService: TimelinePointService, private referencesService: ReferencesService) { }

    ngOnInit() { 
        this.pointService.getPoints()
          .subscribe((points) => this.points = points.sort(this.sortByDate));
        
        this.referencesService.getReferences()
          .subscribe(this.generateReferenceDictionary);
    }

    getReferenceById(id: number): Reference {
        return this.references[id] != null ? this.references[id] : null;
    }

    private generateReferenceDictionary(references: Reference[]) {
        this.references = {};
        for (var i = 0; i < references.length; i++) {
            var ref = references[i];
            this.references[ref.id] = ref;
        }
    }

    private sortByDate(eventA: TimelinePoint, eventB: TimelinePoint): number {
        return eventB.year - eventA.year;
    }
}