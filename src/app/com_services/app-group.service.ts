import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApplicationService } from './application.service';
import { GroupService,Groups } from './group.service';
import { ApiService } from './api-service';

export interface ApplicationGroups{
    ApplicationGroupID?:string,
    ApplicationID?:number,
    GroupID?:number
}

@Injectable()
export class ApplicationGroupService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'ApplicationGroups';

    constructor(private http:Http,private api:ApiService,
        private appSvc:ApplicationService,
        private grpSvc:GroupService){
        
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
    //this will give you list of groups assigned in specific application.
    public async getGroups(applicationID:number):Promise <Groups[]>{
        var appgroup:ApplicationGroups[]=await this.getAll();
        var groups:Groups[]=[];
        appgroup=appgroup.filter(a=>a.ApplicationID==applicationID);
        for(var i=0;i<appgroup.length;i++){
            var tempGroup:Groups= await this.grpSvc.getOne(appgroup[i].GroupID.toString());
            groups=groups.concat(tempGroup);
        }
        return new Promise<Groups[]>((r)=>r(groups));
    }
}