import { Component, OnInit,Input } from '@angular/core';
import { Users,UserService } from '../../../../com_services/user.service';

@Component({
  selector: 'user-prop',
  templateUrl: './user-prop.component.html',
  styleUrls: ['./user-prop.component.css']
})
export class UserPropComponent implements OnInit {
  @Input() isAdd:boolean;
  @Input() usr:any;
  @Input() appGroup:any;
  users:Users[]=[];
  u:number=1;
  constructor(private svc:UserService) { }

  ngOnInit() {
    this.getDependencies();
  }

  async getDependencies(){
    this.users=await this.svc.getAll();
    this.users=this.users.filter(x=>x.IsActive==true);
  }

}
