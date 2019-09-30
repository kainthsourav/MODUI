import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerSignInComponent } from './trainer-sign-in.component';

describe('TrainerSignInComponent', () => {
  let component: TrainerSignInComponent;
  let fixture: ComponentFixture<TrainerSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
