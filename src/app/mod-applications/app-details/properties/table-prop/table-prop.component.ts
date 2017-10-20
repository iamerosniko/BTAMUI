import { Component, OnInit,Input } from '@angular/core';

import { Tables,TableService } from '../../../../com_services/table.service';
@Component({  
  selector: 'table-prop',
  templateUrl: './table-prop.component.html',
  styleUrls: ['./table-prop.component.css']
})
export class TablePropComponent implements OnInit {
  @Input() isAdd:boolean;
  tables:Tables[]=[];
  t:number=1;
  constructor(private svc:TableService) { }

  ngOnInit() {
    this.getDependencies();
  }

  async getDependencies(){
    this.tables=await this.svc.getAll();
    this.tables=this.tables.filter(x=>x.IsActive==true);
  }

}
