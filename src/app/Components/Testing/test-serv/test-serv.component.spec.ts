import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestServComponent } from './test-serv.component';

describe('TestServComponent', () => {
  let component: TestServComponent;
  let fixture: ComponentFixture<TestServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
