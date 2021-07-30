import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRefreshTokenTimerComponent } from './user-refresh-token-timer.component';

describe('UserRefreshTokenTimerComponent', () => {
  let component: UserRefreshTokenTimerComponent;
  let fixture: ComponentFixture<UserRefreshTokenTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRefreshTokenTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRefreshTokenTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
