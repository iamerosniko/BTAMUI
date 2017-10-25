import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApiService } from './api-service';
import { Users,UserService } from './user.service';

export interface ApplicationGroupUsers{
    AppGroupUserID?:string,
    ApplicationGroupID?:string,
    UserID?:number
}

@Injectable()
export class ApplicationGroupUserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'ApplicationGroupUsers';

    constructor(private http:Http,private api:ApiService,private userSvc:UserService){
        
    }
    
    public async getAll(){
        return await this.api.getAll(this.controller);
    }

    public async getOne(id:string){
        return await this.api.getOne(this.controller,id);
    }

    public async post(data:any){
        return await this.api.postData(this.controller,data);
    }

    public async put(data:any,id:string){
        return await this.api.putData(this.controller,data,id);
    }

    public async delete(id:string){
        return await this.api.deleteData(this.controller,id);
    }

    public async getUsers(appgroupid:string):Promise<Users[]>{
        var appGrpUsers:ApplicationGroupUsers[]=await this.getAll();
        var users:Users[]=[];
        //filters appGroupUsers
        appGrpUsers=appGrpUsers.filter(x=>x.ApplicationGroupID==appgroupid);
        for (var i = 0 ;i<appGrpUsers.length; i++){
            var user:Users=await this.userSvc.getOne(appGrpUsers[i].UserID.toString());
            if(user!=null){            
                users=await users.concat(user);
            }
        }
        return new Promise<Users[]>((r)=>r(users));
    }
}
