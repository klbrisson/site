import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Reference } from './';
import { Observable } from 'rxjs';

const URL_EVENT = 'timelineReferences.json';

@Injectable()
export class ReferencesService {
    
    constructor(private http: Http) { }

    getReferences(): Observable<Reference[]> {
        return this.http.get(URL_EVENT)
            .map((resp: Response) => resp.json());
    }
}