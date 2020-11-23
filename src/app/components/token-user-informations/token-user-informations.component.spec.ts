import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenUserInformationsComponent } from './token-user-informations.component';

describe('TokenUserInformationsComponent', () => {
  let component: TokenUserInformationsComponent;
  let fixture: ComponentFixture<TokenUserInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenUserInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenUserInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
