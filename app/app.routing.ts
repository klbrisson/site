import { Routes, RouterModule } from '@angular/router';

import { TimelineComponent, ReferencesComponent } from './components';

const routes: Routes = [
    {
        path: 'references',
        component: ReferencesComponent
    },
    {
        path: '',
        component: TimelineComponent
    }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});