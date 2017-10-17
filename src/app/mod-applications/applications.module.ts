import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsComponent } from './applications.component';
import { ApplicationListsComponent } from './application-lists/application-lists.component';
import { ApplicationsRouting } from './applications.routing';

@NgModule({
  imports: [
    CommonModule,ApplicationsRouting
  ],
  declarations: [ApplicationsComponent, ApplicationListsComponent]
})
export class ApplicationsModule { }
