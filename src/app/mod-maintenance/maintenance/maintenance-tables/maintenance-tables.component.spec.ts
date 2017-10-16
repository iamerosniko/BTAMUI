import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTablesComponent } from './maintenance-tables.component';

describe('MaintenanceTablesComponent', () => {
  let component: MaintenanceTablesComponent;
  let fixture: ComponentFixture<MaintenanceTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
