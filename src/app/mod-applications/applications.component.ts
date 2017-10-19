import { Component, OnInit } from '@angular/core';
import { ApplicationService,Applications } from '../com_services/application.service';

import { Router,ActivatedRoute }  from '@angular/router';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  p:number=1;
  applications:Applications[]=[];
  ID:number=0;
  constructor(private svc:ApplicationService) { }

  ngOnInit() {
    this.getDependencies();
  }

  async getDependencies(){
    this.applications=await this.svc.getAll();
  }

}
