import { Component, OnInit, HostListener } from '@angular/core';

import { TimelinePointComponent, TimelinePointService, TimelinePoint } from './';
import { ReferencesService, Reference } from '../references';

@Component({
    moduleId: module.id,
    selector: 'tl-timeline',
    templateUrl: 'timeline.component.html',
    styleUrls: ['../../resources/css/timeline/timeline.component.css']//,
})
export class TimelineComponent implements OnInit {
    points: TimelinePoint[];
    references: { };
    colors = ['tl-point--teal', 'tl-point--yellow', 'tl-point--orange', 'tl-point--pink', 'tl-point--green'];

    constructor(private pointService: TimelinePointService, private referencesService: ReferencesService) { }

    ngOnInit() { 
        this.pointService.getPoints()
          .subscribe((points) => this.points = points.sort(this.sortById));
    }

    getReferenceById(id: number): Reference {
        return this.references[id] != null ? this.references[id] : null;
    }

    getColor(index: number): string {
        var length = this.colors.length;
        if (index != null) {
            if (index < length) {
                return this.colors[index];
            } else {
                var i = index;
                while (i >= length) {
                    i = i - length;
                }
                return this.colors[i];
            }
        }
        return null;
    }

    private generateReferenceDictionary(references: Reference[]) {
        this.references = {};
        for (var i = 0; i < references.length; i++) {
            var ref = references[i];
            this.references[ref.id] = ref;
        }
    }

    private sortById(eventA: TimelinePoint, eventB: TimelinePoint): number {
        return eventB.id - eventA.id;
  }

    private sortByDate(eventA: TimelinePoint, eventB: TimelinePoint): number {
        if (!eventB.year || !eventA.year) {
            return 1;
        } else {
            return eventB.year - eventA.year;
        }
    }
}