import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Modules } from '../../../../com_services/module.service';
@Component({
  selector: 'module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  @Input() mod:any;
  @Output() detail: EventEmitter<Modules>=new EventEmitter<Modules>();
  constructor() { }

  ngOnInit() {
  }

  sendModule(){
    this.detail.emit(this.mod);
  }

}
