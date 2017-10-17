import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceAppComponent } from './maintenance-app/maintenance-app.component';
import { MaintenanceTablesComponent } from './maintenance-tables/maintenance-tables.component';
import { MaintenanceGroupsComponent } from './maintenance-groups/maintenance-groups.component';
import { MaintenanceModulesComponent } from './maintenance-modules/maintenance-modules.component';
import { MaintenanceUsersComponent } from './maintenance-users/maintenance-users.component';

const appRoutes: Routes = [
    
    { path: 'Maintenance', component: MaintenanceComponent ,children :[
        { path: '', redirectTo: 'Apps', pathMatch: 'full' },
        { path: 'Apps', component:MaintenanceAppComponent },
        { path: 'Tables', component:MaintenanceTablesComponent },
        { path: 'Groups', component:MaintenanceGroupsComponent },
        { path: 'Modules', component:MaintenanceModulesComponent },
        { path: 'Users', component:MaintenanceUsersComponent }
        
    ]}
];

@NgModule ({
    imports: [ RouterModule.forChild(appRoutes) ],
    exports: [ RouterModule ]
})

export class MaintenanceRouting {}
