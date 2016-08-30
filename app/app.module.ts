import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule, HTTP_PROVIDERS } from '@angular/http';

import { APP_COMPONENTS } from './components';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        APP_ROUTING,
    ],
    declarations: [AppComponent, APP_COMPONENTS ],
    providers: [HTTP_PROVIDERS],
    bootstrap: [AppComponent],
})
export class AppModule { }
