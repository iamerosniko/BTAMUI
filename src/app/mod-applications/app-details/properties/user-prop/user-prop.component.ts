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
  appGroupUsers:ApplicationGroupUsers[]=[];
  p:number=1;
  search:string='';
  constructor(private userSvc:UserService,private appGrpUserSvc:ApplicationGroupUserService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    await this.getDependencies();
    if(this.isAdd){
      this.usr=<Users>{IsActive:true,UserID:0,UserName:'',UserMiddleName:'',UserFirstName:'',UserLastName:''}
    }
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    //getAppgroupusers
    this.appGroupUsers=(await this.appGrpUserSvc.getAll()).
      filter(x=>x.ApplicationGroupID==appGroup.ApplicationGroupID)

    await this.removeExisting();
  }

  async removeExisting(){
    this.appGroupUsers.forEach(element => {
      this.users= this.users.filter(x=>x.UserID!=element.UserID);
    });
    this.users=await this.users.filter(x=>x.UserName.toLowerCase().match(this.search.toLowerCase())||
      x.UserFirstName.toLowerCase().match(this.search.toLowerCase())||x.UserLastName.toLowerCase().match(this.search.toLowerCase()))
   
  }

  selectUser(u:Users){
    this.usr=<Users>u;
  }

  async saveChanges(){
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    var user:Users=await <Users>this.usr;
    if(this.isAdd){
      this.appGroupUser=await {AppGroupUserID:UUID.UUID(),
        ApplicationGroupID:appGroup.ApplicationGroupID, UserID:user.UserID};
    }
    await this.appGrpUserSvc.post(this.appGroupUser);
    await this.save.emit();
  }

  async removeUser(){
    if( confirm('Are you sure you want to delete?')){
      var user:Users=await <Users>this.usr;
      var appgrpuser:ApplicationGroupUsers=await this.appGroupUsers.find(x=>x.UserID==user.UserID);
      await this.appGrpUserSvc.delete(appgrpuser.AppGroupUserID);
      await this.save.emit();
    }
   // this.appGroupUser=await this.appGroupUsers.find()
    
  }

  async getDependencies(){
    this.users=(await this.userSvc.getAll()).filter(x=>x.IsActive==true);
  }

}
