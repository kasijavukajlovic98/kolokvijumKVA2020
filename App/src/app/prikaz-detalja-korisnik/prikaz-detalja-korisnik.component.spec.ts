import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazDetaljaKorisnikComponent } from './prikaz-detalja-korisnik.component';

describe('PrikazDetaljaKorisnikComponent', () => {
  let component: PrikazDetaljaKorisnikComponent;
  let fixture: ComponentFixture<PrikazDetaljaKorisnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazDetaljaKorisnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazDetaljaKorisnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
