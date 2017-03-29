import { Component, OnInit, HostListener } from '@angular/core';
import { TimelinePointService, ReferencesService, APP_COMPONENTS } from './components';

@Component({
    moduleId: module.id,
    selector: 'tl-app',
    templateUrl: 'app.component.html',
    styleUrls: ['resources/css/app.component.css'],
    providers: [TimelinePointService, ReferencesService]
})

export class AppComponent { }
