import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavUserComponent } from './nav-user.component';
import { from } from 'rxjs';

describe('NavUserComponent', () => {
  let component: NavUserComponent;
  let fixture: ComponentFixture<NavUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
