import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { Users,UserService } from '../../../../com_services/user.service';

@Component({
  selector: 'user-prop',
  templateUrl: './user-prop.component.html',
  styleUrls: ['./user-prop.component.css']
})
export class UserPropComponent implements OnInit,OnChanges {
  @Input() isAdd:boolean;
  @Input() usr:any;
  @Input() appGroup:any;
  users:Users[]=[];
  u:number=1;
  constructor(private svc:UserService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    if(this.isAdd){
      this.usr=<Users>{IsActive:true,UserID:0,UserName:'',UserMiddleName:'',UserFirstName:'',UserLastName:''}
    }
  }

  selectUser(u:Users){
    console.log(u);
    this.usr=<Users>u;
  }

  async getDependencies(){
    this.users=await this.svc.getAll();
    this.users=this.users.filter(x=>x.IsActive==true);
  }

}
