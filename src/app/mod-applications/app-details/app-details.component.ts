import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApplicationService,Applications } from '../../com_services/application.service';
import { ApplicationGroupService,ApplicationGroups } from '../../com_services/app-group.service';
import { ApplicationGroupModuleService } from '../../com_services/appgroup-module.service';
import { ApplicationGroupTableService } from '../../com_services/appgroup-table.service';
import { ApplicationGroupUserService } from '../../com_services/appgroup-user.service';
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
  appGrp:ApplicationGroups={};
  selectedGroup:Groups={GroupID:0};
  selectedTable:Tables={TableID:0};
  selectedModule:Modules={ModuleID:0};
  selectedUser:Users={UserID:0};
  isAdd:boolean=true;
  constructor(public route: ActivatedRoute,
    private router: Router,
    private appSvc : ApplicationService,
    private appGrpSvc : ApplicationGroupService,
    private appGrpUserSvc : ApplicationGroupUserService,
    private appGrpTableSvc : ApplicationGroupTableService,
    private appGrpModuleSvc : ApplicationGroupModuleService, ) {
    
  }

  ngOnInit() {
    this.getDependencies();
  }

  async saveChanges(){
    await this.selectGroup(this.selectedGroup);
    await alert('Updated Successfully')
    await document.getElementById('goback').click();
  }

  async selectGroup(selectedGroup:Groups){
    this.selectedGroup= await selectedGroup;
    await this.populate(this.application.ApplicationID,this.selectedGroup.GroupID);
  }

  async selectTable(selectedTable:Tables){
    this.selectedTable=await selectedTable;
    this.isAdd=false;
  }

  async selectModule(selectedmodule:Modules){
    this.selectedModule=await selectedmodule;
    this.isAdd=false;
  }

  async selectUser(selectedUser:Tables){
    this.selectedUser=await selectedUser;
    this.isAdd=false;
  }

  async clearTable(){
    this.isAdd=true;
    this.selectedTable=await {TableID:0};
  }

  async populate(appID:number,groupID:number){
    this.appGrp = await this.appGrpSvc.getAppGroup(appID,groupID);
    if(this.appGrp!=null){
      this.modules=(await this.appGrpModuleSvc.getModules(this.appGrp.ApplicationGroupID)).filter(x=>x.IsActive==true);
      this.users=(await this.appGrpUserSvc.getUsers(this.appGrp.ApplicationGroupID)).filter(x=>x.IsActive==true);
      this.tables=(await this.appGrpTableSvc.getTables(this.appGrp.ApplicationGroupID)).filter(x=>x.IsActive==true);
    }
  }

  async getDependencies(){
    await this.verifyID();
    //groups,tables,modules,users
    if(this.application!=null){
      this.groups=await this.appGrpSvc.getGroups(this.application.ApplicationID);
    }

  }

  async verifyID(){
    
    this.application = await this.appSvc.getOne(this.route.snapshot.params['id']);
    if(this.application == null){
      alert("Invalid Application ID")
      this.router.navigate([ '../' ], { relativeTo: this.route });
    }
  }
}
