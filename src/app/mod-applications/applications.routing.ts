import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications/applications.component';
import { ApplicationListsComponent } from './application-lists/application-lists.component';
const appRoutes: Routes = [
    
    { path: 'Applications', component: ApplicationListsComponent },
];

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class ApplicationsRouting {}
