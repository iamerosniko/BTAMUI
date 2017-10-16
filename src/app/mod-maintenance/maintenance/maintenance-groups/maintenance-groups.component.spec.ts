import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceGroupsComponent } from './maintenance-groups.component';

describe('MaintenanceGroupsComponent', () => {
  let component: MaintenanceGroupsComponent;
  let fixture: ComponentFixture<MaintenanceGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
