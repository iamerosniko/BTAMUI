import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Users,UserService } from '../../../../com_services/user.service';
import { ApplicationGroups } from '../../../../com_services/app-group.service';
import { ApplicationGroupUsers,ApplicationGroupUserService } from '../../../../com_services/appgroup-user.service';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'user-prop',
  templateUrl: './user-prop.component.html',
  styleUrls: ['./user-prop.component.css']
})
export class UserPropComponent implements OnInit,OnChanges {
  @Input() isAdd:boolean;
  @Input() usr:any;
  @Input() appGroup:any;
  @Output() save:EventEmitter<any>=new EventEmitter();
  users:Users[]=[];
  appGroupUser:ApplicationGroupUsers={};
  u:number=1;
  constructor(private userSvc:UserService,private appGrpUserSvc:ApplicationGroupUserService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    if(this.isAdd){
      this.usr=<Users>{IsActive:true,UserID:0,UserName:'',UserMiddleName:'',UserFirstName:'',UserLastName:''}
    }
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    //getAppgroupusers
    var appgroupusers:ApplicationGroupUsers[]=await this.appGrpUserSvc.getAll();
    appgroupusers=appgroupusers.filter(x=>x.ApplicationGroupID==appGroup.ApplicationGroupID)
    console.log(appgroupusers)
  
  }

  selectUser(u:Users){
    console.log(u);
    this.usr=<Users>u;
  }

  async saveChanges(){
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    var user:Users=await <Users>this.usr;
    if(this.isAdd){
      this.appGroupUser=await {AppGroupUserID:UUID.UUID(),
        ApplicationGroupID:appGroup.ApplicationGroupID, UserID:user.UserID};
    }
    await console.log(this.appGroupUser);
    this.save.emit();
  }

  async getDependencies(){
    this.users=await this.userSvc.getAll();
    this.users=this.users.filter(x=>x.IsActive==true);
  }

}
