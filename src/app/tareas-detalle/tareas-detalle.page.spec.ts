import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDetallePage } from './tareas-detalle.page';

describe('TareasDetallePage', () => {
  let component: TareasDetallePage;
  let fixture: ComponentFixture<TareasDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
