import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { APP_COMPONENTS } from './components';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';
import { ReferencesComponent } from './components/references';
import { TimelinePointComponent } from './components/timeline';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        APP_ROUTING,
    ],
    declarations: [AppComponent, APP_COMPONENTS, ReferencesComponent, TimelinePointComponent ],
    bootstrap: [AppComponent],
})
export class AppModule { }
