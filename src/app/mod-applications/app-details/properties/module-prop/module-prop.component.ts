import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Modules,ModuleService } from '../../../../com_services/module.service';
import { ApplicationGroups } from '../../../../com_services/app-group.service';
import { ApplicationGroupModules,ApplicationGroupModuleService } from '../../../../com_services/appgroup-module.service';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'module-prop',
  templateUrl: './module-prop.component.html',
  styleUrls: ['./module-prop.component.css']
})
export class ModulePropComponent implements OnInit {
  @Input() isAdd:boolean;
  @Input() mdl:any;
  @Input() appGroup:any;
  @Output() save:EventEmitter<any>=new EventEmitter();

  modules:Modules[]=[];
  appGroupModule:ApplicationGroupModules={};
  appGroupModules:ApplicationGroupModules[]=[];
  p:number=1;
  constructor(private modSvc:ModuleService,private appGrpModuleSvc:ApplicationGroupModuleService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    await this.getDependencies();
    if(this.isAdd){
      this.mdl=<Modules>{IsActive:true,ModuleID:0,ModuleName:''};
    }
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    //getAppgroupusers
    this.appGroupModules=(await this.appGrpModuleSvc.getAll()).
      filter(x=>x.ApplicationGroupID==appGroup.ApplicationGroupID)

    await this.removeExisting();
  }
  
  async removeExisting(){
    this.appGroupModules.forEach(element => {
      this.modules= this.modules.filter(x=>x.ModuleID!=element.ModuleID);
    });
  }

  selectModule(u:Modules){
    this.mdl=<Modules>u;
  }

  //add and save
  async saveChanges(){
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    var mod:Modules=await <Modules>this.mdl;
    if(this.isAdd){
      this.appGroupModule=await {AppGroupModuleID:UUID.UUID(),
        ApplicationGroupID:appGroup.ApplicationGroupID, ModuleID:mod.ModuleID};
    }
    await this.appGrpModuleSvc.post(this.appGroupModule);
    await this.save.emit();
  }

  async removeModule(){
    if( confirm('Are you sure you want to delete?')){
      var mod:Modules=await <Modules>this.mdl;
      var appgrpmodule:ApplicationGroupModules=await this.appGroupModules.find(x=>x.ModuleID==mod.ModuleID);
      await this.appGrpModuleSvc.delete(appgrpmodule.AppGroupModuleID);
      await this.save.emit();
    }
   // this.appGroupUser=await this.appGroupUsers.find()
    
  }

  async getDependencies(){
    this.modules=await this.modSvc.getAll();
    this.modules=this.modules.filter(x=>x.IsActive==true);
  }

}
