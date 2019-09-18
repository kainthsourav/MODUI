import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerMenuComponent } from './trainer-menu.component';

describe('TrainerMenuComponent', () => {
  let component: TrainerMenuComponent;
  let fixture: ComponentFixture<TrainerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
