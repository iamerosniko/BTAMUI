import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'group-prop',
  templateUrl: './group-prop.component.html',
  styleUrls: ['./group-prop.component.css']
})
export class GroupPropComponent implements OnInit {
@Input() isAdd:boolean;
@Input() grp:any;
@Input() appGroup:any;
  constructor() { }

  ngOnInit() {
  }

}
