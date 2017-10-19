import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Applications } from '../../com_services/application.service';
import { Router,ActivatedRoute }  from '@angular/router';
@Component({
  selector: 'application-lists',
  templateUrl: './application-lists.component.html',
  styleUrls: ['./application-lists.component.css']
})
export class ApplicationListsComponent implements OnInit {
@Input() app:any={};
  constructor() { }

  ngOnInit() {
  }


}
