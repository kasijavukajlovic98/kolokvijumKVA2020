import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihOcenaComponent } from './prikaz-svih-ocena.component';

describe('PrikazSvihOcenaComponent', () => {
  let component: PrikazSvihOcenaComponent;
  let fixture: ComponentFixture<PrikazSvihOcenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihOcenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihOcenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
