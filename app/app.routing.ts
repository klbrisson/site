import { Routes, RouterModule } from '@angular/router';

import { IndexComponent, TimelineComponent, ReferencesComponent, PlannerComponent } from './components';

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
        path: 'planner',
        component: PlannerComponent
    },
    {
        path: '',
        component: IndexComponent
    }
];

export const APP_ROUTING = RouterModule.forRoot(routes);