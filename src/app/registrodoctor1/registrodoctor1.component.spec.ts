import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrodoctor1Component } from './registrodoctor1.component';

describe('Registrodoctor1Component', () => {
  let component: Registrodoctor1Component;
  let fixture: ComponentFixture<Registrodoctor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registrodoctor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registrodoctor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
