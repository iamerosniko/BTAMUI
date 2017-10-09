import { Component } from '@angular/core';
import { ApplicationGroupModules } from './com_entities/entities';
import { ApiService } from './com_services/api-service';
import { UserService,Users } from './com_services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  appModules:ApplicationGroupModules;
  constructor(private api:UserService){
    this.sample();
  }
  users:Users[]=[];

  async sample(){
    // this.appModules=<ApplicationGroupModules> await this.app.get();
    var user:Users[]=<Users[]> await this.api.getAll();
    this.users=<Users[]>await this.api.getAll();
    console.log(user);
    console.log(this.users[0]);
    // console.log(<Users[]> await this.api.getAll());
    // console.log(await this.api.getAll(Controllers.C_APPLICATIONS));
  }


}
