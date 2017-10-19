import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService,Users } from '../../com_services/user.service';
@Component({
  selector: 'app-maintenance-users',
  templateUrl: './maintenance-users.component.html',
  styleUrls: ['./maintenance-users.component.css']
})
export class MaintenanceUsersComponent implements OnInit {
  mode:number=0;
  p:number=1;
  users:Users[]=[];
  user:Users={IsActive:true,UserFirstName:'',UserID:0,UserLastName:'',UserMiddleName:'',UserName:''};
  myForm:FormGroup;
  constructor(private svc:UserService,private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.createForm();
    this.refresh();
  }

  ngOnChanges(){
    this.myForm.setValue({
      UserID:this.user.UserID,
      UserName:this.user.UserName,
      UserFirstName:this.user.UserFirstName,
      UserMiddleName:this.user.UserMiddleName,
      UserLastName:this.user.UserLastName,
      IsActive:this.user.IsActive
    })
  }

  async refresh(){
    await this.getDependencies();
  }

  async createForm(){
    this.myForm=this.fb.group({
      UserID:this.user.UserID,
      UserName:[this.user.UserName,Validators.required],
      UserFirstName:[this.user.UserFirstName,Validators.required],
      UserMiddleName:this.user.UserMiddleName,
      UserLastName:[this.user.UserLastName,Validators.required],
      IsActive:this.user.IsActive
    });
  }

  async getDependencies(){
    this.users=await this.svc.getAll();
    await this.cleaning();
  }
  async cleaning(){
    this.user=await {IsActive:true,UserFirstName:'',UserID:0,UserLastName:'',UserMiddleName:'',UserName:''};
    this.mode=await 0;
    this.ngOnChanges();
  }

  async changeStatus(selectedUser:Users){
    selectedUser.IsActive=await !selectedUser.IsActive;
    await this.edit(selectedUser);
    await this.saveChanges();
  }

  async edit(selectedUser:Users){
    this.mode=1;
    this.user=selectedUser;
    this.ngOnChanges();
  }
  async saveChanges(){
    this.user=this.myForm.value
    var res = (this.mode==0) 
      ?( await this.svc.post(this.user),"New User is Successfully Added." )
      :( await this.svc.put(this.user,this.user.UserID.toString()), "User Updated Successfully."); 

    alert(res);
    var a = document.getElementById('goBack').click();
    await this.refresh();
  }
}
