import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceAppComponent } from './maintenance-app.component';

describe('MaintenanceAppComponent', () => {
  let component: MaintenanceAppComponent;
  let fixture: ComponentFixture<MaintenanceAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
