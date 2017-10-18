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
import { UserService } from '../com_services/user.service';
import { ApiService } from '../com_services/api-service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,ModCommonModule,HttpModule,MaintenanceRouting
  ],
  providers:[ApiService,UserService],
  declarations: [MaintenanceComponent, MaintenanceAppComponent, MaintenanceTablesComponent, MaintenanceGroupsComponent, MaintenanceModulesComponent, MaintenanceUsersComponent]
})
export class MaintenanceModule { }
