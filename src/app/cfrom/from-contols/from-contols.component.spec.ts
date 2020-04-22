import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromContolsComponent } from './from-contols.component';

describe('FromContolsComponent', () => {
  let component: FromContolsComponent;
  let fixture: ComponentFixture<FromContolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromContolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromContolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
