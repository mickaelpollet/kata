import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSessionTimerComponent } from './user-session-timer.component';

describe('UserSessionTimerComponent', () => {
  let component: UserSessionTimerComponent;
  let fixture: ComponentFixture<UserSessionTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSessionTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSessionTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
