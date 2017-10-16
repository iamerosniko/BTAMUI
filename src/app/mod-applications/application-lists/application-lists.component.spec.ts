import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationListsComponent } from './application-lists.component';

describe('ApplicationListsComponent', () => {
  let component: ApplicationListsComponent;
  let fixture: ComponentFixture<ApplicationListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
