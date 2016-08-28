import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-event',
    templateUrl: 'event.component.html'
})
export class EventComponent implements OnInit {
    @Input() event: {id: number, date: string, title: string, summary: string, imgUrl: string};
    
    ngOnInit() { }
}