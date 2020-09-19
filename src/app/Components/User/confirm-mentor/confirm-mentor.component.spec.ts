import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMentorComponent } from './confirm-mentor.component';

describe('ConfirmMentorComponent', () => {
  let component: ConfirmMentorComponent;
  let fixture: ComponentFixture<ConfirmMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
