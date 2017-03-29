import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AsyncSubject } from 'rxjs/AsyncSubject';
import 'rxjs/add/operator/map';

import { Reference } from './';

const URL_EVENT = 'timelineReferences.json';

@Injectable()
export class ReferencesService {
    private References: Reference[] = new Array<Reference>();
    private ReferencesLoadedSource = new AsyncSubject<Reference[]>();
    References$ = this.ReferencesLoadedSource.asObservable();

    constructor(private http: Http) { }

    getReferences(): Observable<Reference[]> {
        this.http.get(URL_EVENT)
            .map((resp: Response) => resp.json())
            .subscribe((refs) => {
                this.generateReferenceDictionary(refs);
                this.ReferencesLoadedSource.next(refs);
                this.ReferencesLoadedSource.complete();
            });
        return this.References$;
    }

    getReferenceById(id: number): Reference {
        return this.References[id] != null ? this.References[id] : null;
    }

    private generateReferenceDictionary(references: Reference[]) {
        for (var i = 0; i < references.length; i++) {
            var ref = references[i];
            this.References[ref.id] = ref;
        }
    }
}