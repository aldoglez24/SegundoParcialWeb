import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarestudioComponent } from './ingresarestudio.component';

describe('IngresarestudioComponent', () => {
  let component: IngresarestudioComponent;
  let fixture: ComponentFixture<IngresarestudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarestudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
