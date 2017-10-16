import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';

import { AppRouting } from './app.routing';

import { ApplicationsModule } from './mod-applications/applications.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ApplicationsModule,
    BrowserModule,
    FormsModule,
    AppRouting,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
