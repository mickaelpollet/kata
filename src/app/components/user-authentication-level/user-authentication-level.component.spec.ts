import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthenticationLevelComponent } from './user-authentication-level.component';

describe('UserAuthenticationLevelComponent', () => {
  let component: UserAuthenticationLevelComponent;
  let fixture: ComponentFixture<UserAuthenticationLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAuthenticationLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAuthenticationLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
