import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'group-prop',
  templateUrl: './group-prop.component.html',
  styleUrls: ['./group-prop.component.css']
})
export class GroupPropComponent implements OnInit {
@Input() isAdd:boolean;
  constructor() { }

  ngOnInit() {
  }

}
