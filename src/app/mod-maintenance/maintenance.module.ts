import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceRouting } from './maintenance.routing';
import { MaintenanceAppComponent } from './maintenance/maintenance-app/maintenance-app.component';
import { MaintenanceTablesComponent } from './maintenance/maintenance-tables/maintenance-tables.component';
import { MaintenanceGroupsComponent } from './maintenance/maintenance-groups/maintenance-groups.component';
import { MaintenanceModulesComponent } from './maintenance/maintenance-modules/maintenance-modules.component';
import { MaintenanceUsersComponent } from './maintenance/maintenance-users/maintenance-users.component';
@NgModule({
  imports: [
    CommonModule,MaintenanceRouting
  ],
  declarations: [MaintenanceComponent, MaintenanceAppComponent, MaintenanceTablesComponent, MaintenanceGroupsComponent, MaintenanceModulesComponent, MaintenanceUsersComponent]
})
export class MaintenanceModule { }
