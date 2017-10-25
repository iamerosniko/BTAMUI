import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService,Groups } from '../../com_services/group.service';
@Component({
  selector: 'app-maintenance-groups',
  templateUrl: './maintenance-groups.component.html',
  styleUrls: ['./maintenance-groups.component.css']
})
export class MaintenanceGroupsComponent implements OnInit {
  mode:number=0;
  p:number=1;
  search:string='';
  groups:Groups[]=[];
  group:Groups={IsActive:true,GroupID:0,GroupName:''};
  myForm:FormGroup;
  constructor(private svc:GroupService,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.createForm();
    this.refresh();
  }

  ngOnChanges(){
    this.myForm.setValue({
      GroupID:this.group.GroupID,
      GroupName:this.group.GroupName,
      IsActive:this.group.IsActive
    })
  }

  async refresh(){
    await this.getDependencies();
  }

  async createForm(){
    this.myForm=this.fb.group({
      GroupID:this.group.GroupID,
      GroupName:[this.group.GroupName,Validators.required],
      IsActive:this.group.IsActive
    });
  }

  async getDependencies(){
    this.groups=await this.svc.getAll();
    this.groups=await this.groups.filter(x=>x.GroupName.toLowerCase().match(this.search.toLowerCase()))
    await this.cleaning();
  }
  async cleaning(){
    this.group=await {IsActive:true,GroupID:0,GroupName:''};
    this.mode=await 0;
    this.ngOnChanges();
  }

  async changeStatus(selectedData:Groups){
    selectedData.IsActive=await !selectedData.IsActive;
    await this.edit(selectedData);
    await this.saveChanges();
  }

  async edit(selectedData:Groups){
    this.mode=1;
    this.group=selectedData;
    this.ngOnChanges();
  }
  async saveChanges(){
    this.group=this.myForm.value
    var res = (this.mode==0) 
      ?( await this.svc.post(this.group),"Entry Added Successfully." )
      :( await this.svc.put(this.group,this.group.GroupID.toString()), "Entry Updated Successfully."); 

    alert(res);
    var a = document.getElementById('goBack').click();
    await this.refresh();
  }
}
