import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications.component';
import { AppDetailsComponent } from './app-details/app-details.component';
const appRoutes: Routes = [
    
    { path: 'Applications', component: ApplicationsComponent},
    { path: 'Applications/:id', component: AppDetailsComponent},
    
];

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class ApplicationsRouting {}
