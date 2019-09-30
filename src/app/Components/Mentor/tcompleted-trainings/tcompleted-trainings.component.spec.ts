import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcompletedTrainingsComponent } from './tcompleted-trainings.component';

describe('TcompletedTrainingsComponent', () => {
  let component: TcompletedTrainingsComponent;
  let fixture: ComponentFixture<TcompletedTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcompletedTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcompletedTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
