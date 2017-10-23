import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Users } from '../../../../com_services/user.service';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() user:any;
  @Output() detail: EventEmitter<Users>=new EventEmitter<Users>();
  constructor() { }

  ngOnInit() {
  }
  sendUser(){
    this.detail.emit(this.user);
  }
}
