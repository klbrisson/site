export * from './bio/bio.component';
export * from './index/index.component';
export * from './welcome/welcome.component';
export * from './tech/tech.component';
export * from './projects/projects.component';
export * from './contact/contact.component';
export * from './timeline';
export * from './nav/nav.component';
export * from './references';
export * from './planner/planner.component';

import { IndexComponent, 
        WelcomeComponent, 
        BioComponent,
        TechComponent,
        ProjectsComponent, 
        ContactComponent, 
        TimelineComponent, 
        NavComponent, 
        ReferencesComponent, 
        ReferenceComponent,
        PlannerComponent } from './';

export const APP_COMPONENTS = [
    IndexComponent,
    WelcomeComponent,
    BioComponent,
    TechComponent,
    ProjectsComponent, 
    ContactComponent,
    TimelineComponent,
    NavComponent,
    ReferencesComponent,
    ReferenceComponent,
    PlannerComponent    
];