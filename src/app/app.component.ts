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
  user:Users=null;

  async sample(){
    // this.appModules=<ApplicationGroupModules> await this.app.get();
    var user:Users[]=<Users[]> await this.api.getAll();
    this.users=<Users[]>await this.api.getAll();
    console.log(user);
    console.log(this.users[0]);
    console.log(await this.api.delete('3'));

    this.user=new Users(3,'martiab','Albert Rick','Martirez','',true);
    console.log(await this.api.post(this.user));
    // console.log(<Users[]> await this.api.getAll());
    // console.log(await this.api.getAll(Controllers.C_APPLICATIONS));
  }


}
