import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance/maintenance.component';
const appRoutes: Routes = [
    
    { path: 'Maintenance', component: MaintenanceComponent }
];

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class MaintenanceRouting {}
