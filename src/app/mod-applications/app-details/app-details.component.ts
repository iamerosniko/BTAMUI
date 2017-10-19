import { Component, OnInit } from '@angular/core';
import { ApplicationService,Applications } from '../../com_services/application.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  application:Applications={};
  constructor(public route: ActivatedRoute,
    private router: Router,
    private appSvc : ApplicationService) {
    
  }

  ngOnInit() {
    this.getDependencies();
  }

  async getDependencies(){
    this.application = await this.appSvc.getOne(this.route.snapshot.params['id']);
    if(this.application == null){
      alert("Invalid Application ID")
      this.router.navigate([ '../' ], { relativeTo: this.route });
    }
  }

  async verifyID(){

  }

}
