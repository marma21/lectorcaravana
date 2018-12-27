import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaravanasPage } from './caravanas.page';

describe('CaravanasPage', () => {
  let component: CaravanasPage;
  let fixture: ComponentFixture<CaravanasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaravanasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaravanasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
