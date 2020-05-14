import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazDetaljaFilmComponent } from './prikaz-detalja-film.component';

describe('PrikazDetaljaFilmComponent', () => {
  let component: PrikazDetaljaFilmComponent;
  let fixture: ComponentFixture<PrikazDetaljaFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazDetaljaFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazDetaljaFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
