import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceRouting } from './maintenance.routing';
import { MaintenanceAppComponent } from './maintenance-app/maintenance-app.component';
import { MaintenanceTablesComponent } from './maintenance-tables/maintenance-tables.component';
import { MaintenanceGroupsComponent } from './maintenance-groups/maintenance-groups.component';
import { MaintenanceModulesComponent } from './maintenance-modules/maintenance-modules.component';
import { MaintenanceUsersComponent } from './maintenance-users/maintenance-users.component';

import { ModCommonModule } from '../mod-common/mod-common.module';
@NgModule({
  imports: [
    CommonModule,ModCommonModule,MaintenanceRouting
  ],
  declarations: [MaintenanceComponent, MaintenanceAppComponent, MaintenanceTablesComponent, MaintenanceGroupsComponent, MaintenanceModulesComponent, MaintenanceUsersComponent]
})
export class MaintenanceModule { }
