import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveBarComponent } from './savebar/savebar.component';
import { LoadItemsComponent } from './load-items/load-items.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SaveBarComponent,LoadItemsComponent ],
  exports:[SaveBarComponent,LoadItemsComponent ]
})
export class ModCommonModule { }
