import { Component, OnInit,Input } from '@angular/core';
import { Modules,ModuleService } from '../../../../com_services/module.service';
@Component({
  selector: 'module-prop',
  templateUrl: './module-prop.component.html',
  styleUrls: ['./module-prop.component.css']
})
export class ModulePropComponent implements OnInit {
  @Input() isAdd:boolean;
  modules:Modules[]=[];
  p:number=1;
  constructor(private modSvc:ModuleService) { }

  ngOnInit() {
    this.getDependencies();
  }

  async getDependencies(){
    this.modules=await this.modSvc.getAll();
    this.modules=this.modules.filter(x=>x.IsActive==true);
  }

}
