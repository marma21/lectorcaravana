import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramadaPage } from './programada.page';

describe('ProgramadaPage', () => {
  let component: ProgramadaPage;
  let fixture: ComponentFixture<ProgramadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
