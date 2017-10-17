import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePropComponent } from './table-prop.component';

describe('TablePropComponent', () => {
  let component: TablePropComponent;
  let fixture: ComponentFixture<TablePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
