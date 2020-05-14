import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazDetaljaOcenaComponent } from './prikaz-detalja-ocena.component';

describe('PrikazDetaljaOcenaComponent', () => {
  let component: PrikazDetaljaOcenaComponent;
  let fixture: ComponentFixture<PrikazDetaljaOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazDetaljaOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazDetaljaOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
