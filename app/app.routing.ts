import { Routes, RouterModule } from '@angular/router';

import { IndexComponent, TimelineComponent, ReferencesComponent } from './components';

const routes: Routes = [
    {
        path: 'references',
        component: ReferencesComponent
    },
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: '',
        component: IndexComponent
    }
];

export const APP_ROUTING = RouterModule.forRoot(routes);