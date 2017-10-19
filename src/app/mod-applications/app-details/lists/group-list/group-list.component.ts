import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
@Input() group:any;
  constructor() { }

  ngOnInit() {
  }

}
