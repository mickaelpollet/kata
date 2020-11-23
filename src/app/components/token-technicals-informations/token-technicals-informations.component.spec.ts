import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTechnicalsInformationsComponent } from './token-technicals-informations.component';

describe('TokenTechnicalsInformationsComponent', () => {
  let component: TokenTechnicalsInformationsComponent;
  let fixture: ComponentFixture<TokenTechnicalsInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenTechnicalsInformationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenTechnicalsInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
