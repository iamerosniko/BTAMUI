import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePropComponent } from './module-prop.component';

describe('ModulePropComponent', () => {
  let component: ModulePropComponent;
  let fixture: ComponentFixture<ModulePropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulePropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
