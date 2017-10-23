import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tables } from '../../../../com_services/table.service';
@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
@Input() tbl:any;
@Output() detail: EventEmitter<Tables>=new EventEmitter<Tables>();
  constructor() { }

  ngOnInit() {
  }

  sendTable(){
    this.detail.emit(this.tbl);
  }

}
