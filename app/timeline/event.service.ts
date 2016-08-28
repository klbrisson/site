import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const URL_EVENT = 'app/events.json';

@Injectable()
export class EventService {
    
    constructor(private _http: Http) { }

    getEvents() {
        return this._http.get(URL_EVENT)
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err); // again, customize me please
                return Promise.reject(err);
            });
    }
}