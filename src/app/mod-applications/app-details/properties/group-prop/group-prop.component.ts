import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Groups,GroupService } from '../../../../com_services/group.service';
import { ApplicationGroups,ApplicationGroupService } from '../../../../com_services/app-group.service';
import { ActivatedRoute,Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'group-prop',
  templateUrl: './group-prop.component.html',
  styleUrls: ['./group-prop.component.css']
})
export class GroupPropComponent implements OnInit,OnChanges {
@Input() isAdd:boolean;
@Input() isSelected:boolean;
@Input() grp:any;
@Output() save:EventEmitter<any>=new EventEmitter();

groups:Groups[]=[];
applicationID:number=0;
tempGrp:Groups={};
appGroups:ApplicationGroups[]=[];
  p:number=1;
  constructor(public route: ActivatedRoute,
    private router: Router,
    private grpSvc:GroupService,
    private appGrpSvc:ApplicationGroupService) { }

  ngOnInit() {
    this.applicationID=this.route.snapshot.params['id'];
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){    
    var group:Groups=await <Groups>this.grp;
    if(group.GroupID>0){
      this.tempGrp=group;
    }
    if(this.isAdd&&this.isSelected){
      this.grp=await <Groups>{IsActive:true,GroupID:0,GroupName:''}
    }
    else{
      this.grp=this.tempGrp;
    }
  }

  selectGroup(u:Groups){
    this.grp=<Groups>u;
  }

  async search(){
    this.groups=(await this.grpSvc.getAll()).filter(x=>x.IsActive==true);
    this.appGroups=(await this.appGrpSvc.getAll()).filter(x=>x.ApplicationID==this.applicationID)
    this.appGroups.forEach(element => {
      this.groups=this.groups.filter(x=>x.GroupID!=element.GroupID);
    });
  }

  async saveChanges(){
    var group:Groups=await <Groups>this.grp;
    var appGroup:ApplicationGroups=await {ApplicationGroupID:UUID.UUID(),ApplicationID:this.applicationID,GroupID:group.GroupID};
    await this.appGrpSvc.post(appGroup);
    await this.save.emit();
  }

  async removeAppGroup(){
    if( confirm('Are you sure you want to delete?')){
      var group:Groups=await <Groups>this.grp;
      var appgroup:ApplicationGroups=(await this.appGrpSvc.getAll())
        .find(x=>x.GroupID==group.GroupID && x.ApplicationID==this.applicationID);
      await this.removeAppGrpDependencies(appgroup);
      await this.save.emit();
    }
   // this.appGroupUser=await this.appGroupUsers.find()
  }

  async removeAppGrpDependencies(appGroup:ApplicationGroups){
    await this.appGrpSvc.delete(appGroup.ApplicationGroupID);
    await this.appGrpSvc.dropDependencies(appGroup.ApplicationGroupID);
  }

}
