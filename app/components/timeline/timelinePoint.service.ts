import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { TimelinePoint } from './';
import { Observable } from 'rxjs';

const URL_EVENT = 'timelinePoints.json';

@Injectable()
export class TimelinePointService {
    
    constructor(private http: Http) { }

    getPoints(): Observable<TimelinePoint[]> {
        return this.http.get(URL_EVENT)
            .map(this.extractData);
    }

    extractData(resp: Response) {
        var data = resp.json();
        data.forEach((point: any) => {
            point.date = new Date(point.date);
        });
        return data;
    }
}