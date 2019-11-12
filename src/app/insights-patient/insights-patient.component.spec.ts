import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsPatientComponent } from './insights-patient.component';

describe('InsightsPatientComponent', () => {
  let component: InsightsPatientComponent;
  let fixture: ComponentFixture<InsightsPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
