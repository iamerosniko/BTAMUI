import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-groups',
  templateUrl: './maintenance-groups.component.html',
  styleUrls: ['./maintenance-groups.component.css']
})
export class MaintenanceGroupsComponent implements OnInit {
  mode:number=0;
  p:number=1;
  constructor() { }

  ngOnInit() {
  }

}
