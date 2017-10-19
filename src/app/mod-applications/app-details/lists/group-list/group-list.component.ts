import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Groups } from '../../../../com_services/group.service';
@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
@Input() group:any;
@Output() detail: EventEmitter<Groups>=new EventEmitter<Groups>();
  constructor() { }

  ngOnInit() {
  }

  sendGroup(){
    this.detail.emit(this.group);
  }

}
