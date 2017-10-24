import { Component, OnInit,Input,OnChanges,Output,EventEmitter } from '@angular/core';
import { Tables,TableService } from '../../../../com_services/table.service';
import { ApplicationGroups } from '../../../../com_services/app-group.service';
import { ApplicationGroupTables,ApplicationGroupTableService } from '../../../../com_services/appgroup-table.service';
import { UUID } from 'angular2-uuid';
@Component({  
  selector: 'table-prop',
  templateUrl: './table-prop.component.html',
  styleUrls: ['./table-prop.component.css']
})
export class TablePropComponent implements OnInit, OnChanges {
  @Input() isAdd:boolean;
  @Input() tbl:any;
  @Input() appGroup:any;
  @Output() save:EventEmitter<any>=new EventEmitter();

  tables:Tables[]=[];
  appGroupTable:ApplicationGroupTables={};
  appGroupTables:ApplicationGroupTables[]=[];
  t:number=1;
  constructor(private svc:TableService,private appGrpTableSvc:ApplicationGroupTableService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    await this.getDependencies();
    var appGroup:ApplicationGroups=await <ApplicationGroups>this.appGroup;
    //getAppgroupusers
    this.appGroupTables=(await this.appGrpTableSvc.getAll()).
      filter(x=>x.ApplicationGroupID==appGroup.ApplicationGroupID)
    if(this.isAdd){
      var table:Tables=await <Tables>this.tbl;
      this.appGroupTable=await {
        ApplicationGroupID:appGroup.ApplicationGroupID,
        TableID:table.TableID,AppGroupTableID:UUID.UUID(),
        CanDelete:false,CanGet:false,CanPost:false,CanPut:false};
    }
    else{
      var table:Tables=await <Tables>this.tbl;
      this.appGroupTable=await this.appGroupTables.find(x=>x.TableID==table.TableID);
      if(this.appGroupTable==null){
        this.appGroupTable=await { CanDelete:false,CanGet:false,CanPost:false,CanPut:false };
      }
    }
    await this.removeExisting();
  }
  
  async removeExisting(){
    this.appGroupTables.forEach(element => {
      this.tables= this.tables.filter(x=>x.TableID!=element.TableID);
    });
    // console.log(this.users);
  }

  async selectTable(u:Tables){ 
    this.tbl=await <Tables>u;
    this.appGroupTable.TableID=await u.TableID

    console.log(this.appGroupTable)
  }

  async saveChanges(){
    console.log(this.appGroupTable);
    (this.isAdd)?
      await this.appGrpTableSvc.post(this.appGroupTable):
      await this.appGrpTableSvc.put(this.appGroupTable,this.appGroupTable.AppGroupTableID);
    // await console.log(this.appGroupUser);
    await this.save.emit();


  }

  async removeUser(){
    if( confirm('Are you sure you want to delete?')){
      var table:Tables=await <Tables>this.tbl;
      var appgrptable:ApplicationGroupTables=await this.appGroupTables.find(x=>x.TableID==table.TableID);
      await this.appGrpTableSvc.delete(appgrptable.AppGroupTableID);
      await this.save.emit();
    }
   // this.appGroupUser=await this.appGroupUsers.find()
    
  }

  async getDependencies(){
    this.tables=await this.svc.getAll();
    this.tables=this.tables.filter(x=>x.IsActive==true);
  }

}
