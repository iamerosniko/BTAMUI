import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';
import { ApiService } from './api-service';
import { Tables,TableService } from './table.service';

export interface ApplicationGroupTables{
    AppGroupTableID?:string,
    ApplicationGroupID?:string,
    TableID?:number,
    CanGet?:boolean,
    CanPost?:boolean,
    CanPut?:boolean,
    CanDelete?:boolean
}

@Injectable()
export class ApplicationGroupTableService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private controller = 'ApplicationGroupTables';

    constructor(private http:Http,private api:ApiService,private tblSvc:TableService){
        
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

    public async getTables(appgroupid:string):Promise<Tables[]>{
        var appGrpTables:ApplicationGroupTables[]=await this.getAll();
        var tables:Tables[]=[];
        //filters appGroupUsers
        appGrpTables=appGrpTables.filter(x=>x.ApplicationGroupID==appgroupid);
        for (var i = 0 ;i<appGrpTables.length; i++){
            var tbl:Tables=await this.tblSvc.getOne(appGrpTables[i].TableID.toString());
            if(tbl!=null){            
                tables=await tables.concat(tbl);
            }
        }
        // console.log(tables);
        return new Promise<Tables[]>((r)=>r(tables));
    }
}
