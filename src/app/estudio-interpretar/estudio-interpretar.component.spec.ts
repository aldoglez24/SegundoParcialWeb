import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioInterpretarComponent } from './estudio-interpretar.component';

describe('EstudioInterpretarComponent', () => {
  let component: EstudioInterpretarComponent;
  let fixture: ComponentFixture<EstudioInterpretarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudioInterpretarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioInterpretarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
