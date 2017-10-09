import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../com_entities/app-settings';

export class Users{
    constructor(
        public UserID:number,
        public UserName : string,
        public UserFirstName : string,
        public UserLastName : string,
        public UserMiddleName : string,
        public IsActive:boolean
    ){

    }
}
@Injectable()
export class UserService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = '';

    constructor(private http:Http){
        
    }
    
    public getAll(): Promise<any[]> {  
        this.apiUrl=AppSettings.GETAPIURL('Users');
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }

    public getOne(id:string): Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL('Users');
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }  

    public postData(data:any,id:string): Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL('Users');
        return this.http
          .post(this.apiUrl, JSON.stringify(data), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(AppSettings.handleError);
    }

    public putData(data:any,id:string):Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL('Users');
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .put(url, JSON.stringify(data), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }

    private deleteData(data:any,id:string):Promise<any>{
        this.apiUrl=AppSettings.GETAPIURL('Users');
        const url = `${this.apiUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }
}
