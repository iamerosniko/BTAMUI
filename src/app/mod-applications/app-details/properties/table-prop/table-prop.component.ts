import { Component, OnInit,Input,OnChanges } from '@angular/core';

import { Tables,TableService } from '../../../../com_services/table.service';
@Component({  
  selector: 'table-prop',
  templateUrl: './table-prop.component.html',
  styleUrls: ['./table-prop.component.css']
})
export class TablePropComponent implements OnInit, OnChanges {
  @Input() isAdd:boolean;
  @Input() tbl:any;
  @Input() appGroup:any;
  tables:Tables[]=[];
  t:number=1;
  constructor(private svc:TableService) { }

  ngOnInit() {
    this.getDependencies();
  }

  ngOnChanges(){
    this.checkValue();
  }

  async checkValue(){
    if(this.isAdd){
      this.tbl=<Tables>{IsActive:true,TableID:0,TableName:''};
    }
  }
  
  selectTable(u:Tables){
    console.log(u);
    this.tbl=<Tables>u;
  }

  async getDependencies(){
    this.tables=await this.svc.getAll();
    this.tables=this.tables.filter(x=>x.IsActive==true);
  }

}
