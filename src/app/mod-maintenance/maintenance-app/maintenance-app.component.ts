import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationService,Applications } from '../../com_services/application.service';
@Component({
  selector: 'app-maintenance-app',
  templateUrl: './maintenance-app.component.html',
  styleUrls: ['./maintenance-app.component.css']
})
export class MaintenanceAppComponent implements OnInit {
  mode:number=0;
  p:number=1;
  applications:Applications[]=[];
  application:Applications={IsActive:true,ApplicationID:0,ApplicationName:''};
  myForm:FormGroup;
  constructor(private svc:ApplicationService,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.createForm();
    this.refresh();
  }

  ngOnChanges(){
    this.myForm.setValue({
      ApplicationID:this.application.ApplicationID,
      ApplicationName:this.application.ApplicationName,
      IsActive:this.application.IsActive
    })
  }

  async refresh(){
    await this.getDependencies();
  }

  async createForm(){
    this.myForm=this.fb.group({
      ApplicationID:this.application.ApplicationID,
      ApplicationName:[this.application.ApplicationName,Validators.required],
      IsActive:this.application.IsActive
    });
  }

  async getDependencies(){
    this.applications=await this.svc.getAll();
    await this.cleaning();
  }
  async cleaning(){
    this.application=await {IsActive:true,ApplicationID:0,ApplicationName:''};
    this.mode=await 0;
    this.ngOnChanges();
  }

  async changeStatus(selectedData:Applications){
    selectedData.IsActive=await !selectedData.IsActive;
    await this.edit(selectedData);
    await this.saveChanges();
  }

  async edit(selectedData:Applications){
    this.mode=1;
    this.application=selectedData;
    this.ngOnChanges();
  }
  async saveChanges(){
    this.application=this.myForm.value
    var res = (this.mode==0) 
      ?( await this.svc.post(this.application),"Entry Added Successfully." )
      :( await this.svc.put(this.application,this.application.ApplicationID.toString()), "Entry Updated Successfully."); 

    alert(res);
    var a = document.getElementById('goBack').click();
    await this.refresh();
  }
}
