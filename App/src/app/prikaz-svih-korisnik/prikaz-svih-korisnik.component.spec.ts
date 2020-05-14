import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihKorisnikComponent } from './prikaz-svih-korisnik.component';

describe('PrikazSvihKorisnikComponent', () => {
  let component: PrikazSvihKorisnikComponent;
  let fixture: ComponentFixture<PrikazSvihKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihKorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
