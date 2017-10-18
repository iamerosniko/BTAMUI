import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-modules',
  templateUrl: './maintenance-modules.component.html',
  styleUrls: ['./maintenance-modules.component.css']
})
export class MaintenanceModulesComponent implements OnInit {
  mode:number=0;
  p:number=1;
  constructor() { }

  ngOnInit() {
  }

}
