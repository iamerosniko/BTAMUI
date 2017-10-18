import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-tables',
  templateUrl: './maintenance-tables.component.html',
  styleUrls: ['./maintenance-tables.component.css']
})
export class MaintenanceTablesComponent implements OnInit {
  mode:number=0;
  p:number=1;
  constructor() { }

  ngOnInit() {
  }

}
