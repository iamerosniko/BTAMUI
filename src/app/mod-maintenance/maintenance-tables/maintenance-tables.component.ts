import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService,Tables } from '../../com_services/table.service';
@Component({
  selector: 'app-maintenance-tables',
  templateUrl: './maintenance-tables.component.html',
  styleUrls: ['./maintenance-tables.component.css']
})
export class MaintenanceTablesComponent implements OnInit {
  mode:number=0;
  p:number=1;
  tables:Tables[]=[];
  table:Tables={IsActive:true,TableID:0,TableName:''};
  myForm:FormGroup;
  constructor(private svc:TableService,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.createForm();
    this.refresh();
  }

  ngOnChanges(){
    this.myForm.setValue({
      TableID:this.table.TableID,
      TableName:this.table.TableName,
      IsActive:this.table.IsActive
    })
  }

  async refresh(){
    await this.getDependencies();
  }

  async createForm(){
    this.myForm=this.fb.group({
      TableID:this.table.TableID,
      TableName:[this.table.TableName,Validators.required],
      IsActive:this.table.IsActive
    });
  }

  async getDependencies(){
    this.tables=await this.svc.getAll();
    await this.cleaning();
  }
  async cleaning(){
    this.table=await {IsActive:true,TableID:0,TableName:''};
    this.mode=await 0;
    this.ngOnChanges();
  }

  async changeStatus(selectedData:Tables){
    selectedData.IsActive=await !selectedData.IsActive;
    await this.edit(selectedData);
    await this.saveChanges();
  }

  async edit(selectedData:Tables){
    this.mode=1;
    this.table=selectedData;
    this.ngOnChanges();
  }
  async saveChanges(){
    this.table=this.myForm.value
    var res = (this.mode==0) 
      ?( await this.svc.post(this.table),"Entry Added Successfully." )
      :( await this.svc.put(this.table,this.table.TableID.toString()), "Entry Updated Successfully."); 

    alert(res);
    var a = document.getElementById('goBack').click();
    await this.refresh();
  }
}
