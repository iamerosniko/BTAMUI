import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
@Input() tbl:any;
  constructor() { }

  ngOnInit() {
  }

}
