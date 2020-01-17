import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecutivoBComponent } from './ejecutivo-b.component';

describe('EjecutivoBComponent', () => {
  let component: EjecutivoBComponent;
  let fixture: ComponentFixture<EjecutivoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjecutivoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjecutivoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
