import { Component } from '@angular/core';
import { ApplicationGroupModules } from './com_entities/entities';
import { ApiService } from './com_services/api-service';
import { UserService,Users } from './com_services/user.service';
import { FormControl,FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UserEntity } from  './com_entities/entities';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroForm: FormGroup; // <--- heroForm is of type FormGroup
  
  appModules:ApplicationGroupModules;
  constructor(private api:UserService,private fb: FormBuilder){
    this.sample();
    this.createForm();
  }
  users:Users[]=[];
  // user:Users={UserName:'blanlui',IsActive:true,UserFirstName:'Luis Alfredo',UserLastName:'Blanco',UserMiddleName:'Borja'};
  user:Users={};
  sampleEntity:UserEntity;
  async sample(){
    // this.appModules=<ApplicationGroupModules> await this.app.get();
    var user:Users[]=<Users[]> await this.api.getAll();
    this.users=<Users[]>await this.api.getAll();
    console.log(user);
    console.log(this.users[0]);


    //this.user={UserName:'blanlui',IsActive:true,UserFirstName:'Luis Alfredo',UserLastName:'Blanco',UserMiddleName:'Borja'}
    this.api.configure(this.user);
    //console.log(await this.api.post(this.user));
    // console.log(<Users[]> await this.api.getAll());
    // console.log(await this.api.getAll(Controllers.C_APPLICATIONS));
  }
  createForm() {
    this.heroForm = this.fb.group({
      name:[ this.user.UserName, Validators.required ], // <--- the FormControl called "name"
    });
//    this.fill();
console.log(this.heroForm.value);

console.log(this.heroForm.status);
  }


}
