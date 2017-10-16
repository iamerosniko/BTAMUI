import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceRouting } from './maintenance.routing';
@NgModule({
  imports: [
    CommonModule,MaintenanceRouting
  ],
  declarations: [MaintenanceComponent]
})
export class MaintenanceModule { }
