import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihFilmComponent } from './prikaz-svih-film.component';

describe('PrikazSvihFilmComponent', () => {
  let component: PrikazSvihFilmComponent;
  let fixture: ComponentFixture<PrikazSvihFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
