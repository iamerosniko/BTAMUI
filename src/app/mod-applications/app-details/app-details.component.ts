import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApplicationService,Applications } from '../../com_services/application.service';
import { ApplicationGroupService } from '../../com_services/app-group.service';
import { Groups } from '../../com_services/group.service';
import { Users } from '../../com_services/user.service';
import { Modules } from '../../com_services/module.service';
import { Tables } from '../../com_services/table.service';
@Component({
  selector: 'app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit {
  application:Applications={};
  groups:Groups[]=[];
  modules:Modules[]=[];
  tables:Tables[]=[];
  users:Users[]=[];

  selectedGroup:Groups={};
  constructor(public route: ActivatedRoute,
    private router: Router,
    private appSvc : ApplicationService,
    private appGrpSvc : ApplicationGroupService) {
    
  }

  ngOnInit() {
    this.getDependencies();
  }

  selectGroup(selectedGroup:Groups){
    this.selectedGroup=selectedGroup;
  }






  async getDependencies(){
    await this.verifyID();
    //groups,tables,modules,users
    this.groups=await this.appGrpSvc.getGroups(this.application.ApplicationID);

  }

  async verifyID(){
    
    this.application = await this.appSvc.getOne(this.route.snapshot.params['id']);
    if(this.application == null){
      alert("Invalid Application ID")
      this.router.navigate([ '../' ], { relativeTo: this.route });
    }
  }

}
