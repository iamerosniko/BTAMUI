import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-app',
  templateUrl: './maintenance-app.component.html',
  styleUrls: ['./maintenance-app.component.css']
})
export class MaintenanceAppComponent implements OnInit {
  mode:number=0;
  p:number=1;
  constructor() { }

  ngOnInit() {
  }

}
