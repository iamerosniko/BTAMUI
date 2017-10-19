import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModuleService,Modules } from '../../com_services/module.service';
@Component({
  selector: 'app-maintenance-modules',
  templateUrl: './maintenance-modules.component.html',
  styleUrls: ['./maintenance-modules.component.css']
})
export class MaintenanceModulesComponent implements OnInit {
  mode:number=0;
  p:number=1;
  modules:Modules[]=[];
  module:Modules={IsActive:true,ModuleID:0,ModuleName:''};
  myForm:FormGroup;
  constructor(private svc:ModuleService,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.createForm();
    this.refresh();
  }

  ngOnChanges(){
    this.myForm.setValue({
      ModuleID:this.module.ModuleID,
      ModuleName:this.module.ModuleName,
      IsActive:this.module.IsActive
    })
  }

  async refresh(){
    await this.getDependencies();
  }

  async createForm(){
    this.myForm=this.fb.group({
      ModuleID:this.module.ModuleID,
      ModuleName:[this.module.ModuleName,Validators.required],
      IsActive:this.module.IsActive
    });
  }

  async getDependencies(){
    this.modules=await this.svc.getAll();
    await this.cleaning();
  }
  async cleaning(){
    this.module=await {IsActive:true,ModuleID:0,ModuleName:''};
    this.mode=await 0;
    this.ngOnChanges();
  }

  async changeStatus(selectedData:Modules){
    selectedData.IsActive=await !selectedData.IsActive;
    await this.edit(selectedData);
    await this.saveChanges();
  }

  async edit(selectedData:Modules){
    this.mode=1;
    this.module=selectedData;
    this.ngOnChanges();
  }
  async saveChanges(){
    this.module=this.myForm.value
    var res = (this.mode==0) 
      ?( await this.svc.post(this.module),"Entry Added Successfully." )
      :( await this.svc.put(this.module,this.module.ModuleID.toString()), "Entry Updated Successfully."); 

    alert(res);
    var a = document.getElementById('goBack').click();
    await this.refresh();
  }
}
