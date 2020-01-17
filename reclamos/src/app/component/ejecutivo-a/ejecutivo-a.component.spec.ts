import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoAComponent } from './ejecutivo-a.component';

describe('EjecutivoAComponent', () => {
  let component: EjecutivoAComponent;
  let fixture: ComponentFixture<EjecutivoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
