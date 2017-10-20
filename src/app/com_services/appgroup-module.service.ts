import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApiService } from './api-service';
import { Modules,ModuleService } from './module.service';

export interface ApplicationGroupModules{
    AppGroupModuleID?:string,
    ApplicationGroupID?:string,
    ModuleID?:number
}

@Injectable()
export class ApplicationGroupModuleService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'ApplicationGroupModules';

    constructor(private http:Http,private api:ApiService,private modSvc:ModuleService){
        
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

    public async getModules(appgroupid:string):Promise<Modules[]>{
        var appGrpModules:ApplicationGroupModules[]=await this.getAll();
        var modules:Modules[]=[];
        //filters appGroupUsers
        appGrpModules=appGrpModules.filter(x=>x.ApplicationGroupID==appgroupid);
        for (var i = 0 ;i<appGrpModules.length; i++){
            var mod:Modules=await this.modSvc.getOne(appGrpModules[i].ModuleID.toString());
            if(mod!=null){            
                modules=await modules.concat(mod);
            }
        }
        console.log(modules);
        return new Promise<Modules[]>((r)=>r(modules));
    }
}
