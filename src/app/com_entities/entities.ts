import { ApiService } from '../com_services/api-service';
import { NgModule } from '@angular/core';



export class Entities {

}

export class ApplicationGroupModules{
    constructor(
        public AppGroupModuleID:string,
        public ApplicationGroupID : string,
        public ModuleID:number
    ){
    }
}

export class ApplicationGroupTables{
    constructor(
        public AppGroupTableID:string,
        public ApplicationGroupID : string,
        public TableID:number,
        public CanGet:boolean,
        public CanPost:boolean,
        public CanPut:boolean,
        public CanDelete:boolean
    ){

    }
}

export class ApplicationGroupUsers{
    constructor(
        public AppGroupUserID:string,
        public ApplicationGroupID : string,
        public UserID:number
    ){

    }
}

export class ApplicationGroups{
    constructor(
        public ApplicationGroupID :string,
        public ApplicationID :number,
        public GroupID:number
    ){

    }
}

export class Applications{
    constructor(
        public ApplicationID:number,
        public ApplicationName : string,
        public IsActive:boolean
    ){

    }
}

export class Audit{
    constructor(
        public AuditID:string,
        public DateCreated :Date,
        public Application :string,
        public Table :string,
        public Action:string,
        public User:string
    ){

    }
}

export class Groups{
    constructor(
        public GroupID:number,
        public GroupName : string,
        public IsActive:boolean
    ){

    }
}

export class Modules{
    constructor(
        public ModuleID:number,
        public ModuleName : string,
        public IsActive:boolean
    ){

    }
}

export class Tables{
    constructor(
        public TableID:number,
        public TableName : string,
        public IsActive:boolean
    ){

    }
}


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