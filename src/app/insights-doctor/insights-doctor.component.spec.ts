import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsDoctorComponent } from './insights-doctor.component';

describe('InsightsDoctorComponent', () => {
  let component: InsightsDoctorComponent;
  let fixture: ComponentFixture<InsightsDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
