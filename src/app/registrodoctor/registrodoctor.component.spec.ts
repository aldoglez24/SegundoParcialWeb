import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodoctorComponent } from './registrodoctor.component';

describe('RegistrodoctorComponent', () => {
  let component: RegistrodoctorComponent;
  let fixture: ComponentFixture<RegistrodoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
