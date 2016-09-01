import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { ReferencesService, Reference } from './';

@Component({
    moduleId: module.id,
    selector: 'tl-reference',
    templateUrl: 'reference.component.html',
    styleUrls: ['../../resources/css/references/references.component.css']
})
export class ReferenceComponent {
    private hook: Subscription;
    
    @Input('refId') refId: number;
    ref: Reference = new Reference();

    constructor(private refService: ReferencesService) { 
        this.hook = refService.References$.subscribe(() => {
            this.ref = this.refService.getReferenceById(this.refId);
        });
    }
}