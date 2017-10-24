import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Groups,GroupService } from '../../../../com_services/group.service';
import { ApplicationGroups,ApplicationGroupService } from '../../../../com_services/app-group.service';

import { UUID } from 'angular2-uuid';
@Component({
  selector: 'group-prop',
  templateUrl: './group-prop.component.html',
  styleUrls: ['./group-prop.component.css']
})
export class GroupPropComponent implements OnInit,OnChanges {
@Input() isAdd:boolean;
@Input() grp:any;
@Input() applicationID:number;
@Output() save:EventEmitter<any>=new EventEmitter();

groups:Groups[]=[];
  u:number=1;
  constructor(private grpSvc:GroupService,appGrpSvc:ApplicationGroupService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    await this.getDependencies();
    if(this.isAdd){
      this.grp=<Groups>{IsActive:true,GroupID:0,GroupName:''}
    }
  }

  // async removeExisting(){
  //   this.appGroupUsers.forEach(element => {
  //     this.users= this.users.filter(x=>x.UserID!=element.UserID);
  //   });
  //   // console.log(this.users);
  // }

  // selectUser(u:Users){
  //   console.log(u);
  //   this.usr=<Users>u;
  // }

  // async saveChanges(){
  //   var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
  //   var user:Users=await <Users>this.usr;
  //   if(this.isAdd){
  //     this.appGroupUser=await {AppGroupUserID:UUID.UUID(),
  //       ApplicationGroupID:appGroup.ApplicationGroupID, UserID:user.UserID};
  //   }
  //   await this.appGrpUserSvc.post(this.appGroupUser);
  //   // await console.log(this.appGroupUser);
  //   await this.save.emit();
  // }

  // async removeUser(){
  //   if( confirm('Are you sure you want to delete?')){
  //     var user:Users=await <Users>this.usr;
  //     var appgrpuser:ApplicationGroupUsers=await this.appGroupUsers.find(x=>x.UserID==user.UserID);
  //     await this.appGrpUserSvc.delete(appgrpuser.AppGroupUserID);
  //     await this.save.emit();
  //   }
  //  // this.appGroupUser=await this.appGroupUsers.find()
    
  // }

  async getDependencies(){
    this.groups=(await this.grpSvc.getAll()).filter(x=>x.IsActive==true);
    // await console.log(this.users)
    await console.log(this.groups)
  }

}
