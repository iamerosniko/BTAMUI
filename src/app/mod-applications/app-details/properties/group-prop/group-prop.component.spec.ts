import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPropComponent } from './group-prop.component';

describe('GroupPropComponent', () => {
  let component: GroupPropComponent;
  let fixture: ComponentFixture<GroupPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
