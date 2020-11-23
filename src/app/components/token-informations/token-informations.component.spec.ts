import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenInformationsComponent } from './token-informations.component';

describe('TokenInformationsComponent', () => {
  let component: TokenInformationsComponent;
  let fixture: ComponentFixture<TokenInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
