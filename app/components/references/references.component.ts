import { Component, OnInit } from '@angular/core';

import { ReferencesService, Reference } from './';

@Component({
    moduleId: module.id,
    selector: 'tl-references',
    templateUrl: 'references.component.html',
        styleUrls: ['../../resources/css/references/references.component.css']
})
export class ReferencesComponent implements OnInit {
    references: Reference[];

    constructor(private referencesService: ReferencesService) { }

    ngOnInit() { 
        this.referencesService.getReferences()
          .subscribe((references) => this.references = references);
    }
}