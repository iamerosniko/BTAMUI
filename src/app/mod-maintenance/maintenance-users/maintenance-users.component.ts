import { Component, OnInit } from '@angular/core';
import { UserService,Users } from '../../com_services/user.service';
@Component({
  selector: 'app-maintenance-users',
  templateUrl: './maintenance-users.component.html',
  styleUrls: ['./maintenance-users.component.css']
})
export class MaintenanceUsersComponent implements OnInit {
  mode=0;
  users:Users[]=[];
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
    this.svc=await null
  }
}
