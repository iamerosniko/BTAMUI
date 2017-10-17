import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceModulesComponent } from './maintenance-modules.component';

describe('MaintenanceModulesComponent', () => {
  let component: MaintenanceModulesComponent;
  let fixture: ComponentFixture<MaintenanceModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
