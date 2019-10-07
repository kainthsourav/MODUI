import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTrainerComponent } from './nav-trainer.component';

describe('NavTrainerComponent', () => {
  let component: NavTrainerComponent;
  let fixture: ComponentFixture<NavTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
