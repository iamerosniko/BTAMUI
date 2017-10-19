import { Component, OnInit,Input } from '@angular/core';
import { Applications } from '../../com_services/application.service';
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
