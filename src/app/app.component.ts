import { Component } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(){
  }
  
  linkCLick(){
  }
    
  $lnk_applications = $('.lnk-applications');
  $lnk_maintenance = $('.lnk-maintenance');

}
