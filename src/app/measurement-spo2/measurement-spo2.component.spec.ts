import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementSpo2Component } from './measurement-spo2.component';

describe('MeasurementSpo2Component', () => {
  let component: MeasurementSpo2Component;
  let fixture: ComponentFixture<MeasurementSpo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementSpo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementSpo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
