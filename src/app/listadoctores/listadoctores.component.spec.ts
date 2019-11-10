import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoctoresComponent } from './listadoctores.component';

describe('ListadoctoresComponent', () => {
  let component: ListadoctoresComponent;
  let fixture: ComponentFixture<ListadoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
