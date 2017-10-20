import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  @Input() mod:any;
  constructor() { }

  ngOnInit() {
  }

}
