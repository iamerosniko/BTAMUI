import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { ApiService } from './com_services/api-service';

import { UserService } from './com_services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [ApiService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
