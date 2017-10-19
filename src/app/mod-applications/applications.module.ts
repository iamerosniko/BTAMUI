import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsComponent } from './applications.component';
import { ApplicationListsComponent } from './application-lists/application-lists.component';
import { ApplicationsRouting } from './applications.routing';
import { AppDetailsComponent } from './app-details/app-details.component';
import { GroupListComponent } from './app-details/lists/group-list/group-list.component';
import { UserListComponent } from './app-details/lists/user-list/user-list.component';
import { TableListComponent } from './app-details/lists/table-list/table-list.component';
import { ModuleListComponent } from './app-details/lists/module-list/module-list.component';
import { TablePropComponent } from './app-details/properties/table-prop/table-prop.component';
import { GroupPropComponent } from './app-details/properties/group-prop/group-prop.component';
import { ModulePropComponent } from './app-details/properties/module-prop/module-prop.component';
import { UserPropComponent } from './app-details/properties/user-prop/user-prop.component';


import { NgxPaginationModule } from 'ngx-pagination';
import { ApplicationService } from '../com_services/application.service';

@NgModule({
  imports: [
    CommonModule,NgxPaginationModule,ApplicationsRouting
  ],
  providers:[ApplicationService],
  declarations: [ApplicationsComponent, 
    ApplicationListsComponent, AppDetailsComponent, 
    GroupListComponent, UserListComponent, TableListComponent, TablePropComponent, GroupPropComponent, ModulePropComponent, UserPropComponent, ModuleListComponent,]
})
export class ApplicationsModule { }
