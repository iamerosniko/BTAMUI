import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaintenanceComponent } from './maintenance.component';
import { MaintenanceRouting } from './maintenance.routing';
import { MaintenanceAppComponent } from './maintenance-app/maintenance-app.component';
import { MaintenanceTablesComponent } from './maintenance-tables/maintenance-tables.component';
import { MaintenanceGroupsComponent } from './maintenance-groups/maintenance-groups.component';
import { MaintenanceModulesComponent } from './maintenance-modules/maintenance-modules.component';
import { MaintenanceUsersComponent } from './maintenance-users/maintenance-users.component';

import { ModCommonModule } from '../mod-common/mod-common.module';
import { UserService } from '../com_services/user.service';
import { TableService } from '../com_services/table.service';
import { GroupService } from '../com_services/group.service';
import { ModuleService } from '../com_services/module.service';
import { ApplicationService } from '../com_services/application.service';
import { ApiService } from '../com_services/api-service';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,FormsModule,ModCommonModule,ReactiveFormsModule,HttpModule,NgxPaginationModule,MaintenanceRouting
  ],
  providers:[ApiService,UserService,TableService,GroupService,
    ModuleService,ApplicationService],
  declarations: [MaintenanceComponent, MaintenanceAppComponent, MaintenanceTablesComponent, MaintenanceGroupsComponent, MaintenanceModulesComponent, MaintenanceUsersComponent]
})
export class MaintenanceModule { }
