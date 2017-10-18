import { Component, OnInit } from '@angular/core';
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
  user:Users={};
  constructor(private svc:UserService) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh(){
    await this.getDependencies();
  }
  async getDependencies(){
    this.users=await this.svc.getAll();
    await this.cleaning();
  }
  async cleaning(){
    this.user={};
    this.mode=0;
  }
  async edit(selectedUser:Users){
    this.mode=1;
    this.user=selectedUser;
  }
  async saveChanges(){
    var res = (this.mode==0) 
      ? await this.svc.post(this.users)
      : await this.svc.put(this.user,this.user.UserID.toString()); 

    console.log(res);
    await this.refresh();
  }
}
