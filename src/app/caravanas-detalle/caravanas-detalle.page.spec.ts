import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanasDetallePage } from './caravanas-detalle.page';

describe('CaravanasDetallePage', () => {
  let component: CaravanasDetallePage;
  let fixture: ComponentFixture<CaravanasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaravanasDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaravanasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
