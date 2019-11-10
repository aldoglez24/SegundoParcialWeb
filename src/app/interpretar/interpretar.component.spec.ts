import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretarComponent } from './interpretar.component';

describe('InterpretarComponent', () => {
  let component: InterpretarComponent;
  let fixture: ComponentFixture<InterpretarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
