import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicationsComponent } from './applications.component';
const appRoutes: Routes = [
    
    { path: 'Applications', component: ApplicationsComponent },
];

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class ApplicationsRouting {}
