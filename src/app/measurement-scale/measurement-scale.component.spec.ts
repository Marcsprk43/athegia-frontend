import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementScaleComponent } from './measurement-scale.component';

describe('MeasurementScaleComponent', () => {
  let component: MeasurementScaleComponent;
  let fixture: ComponentFixture<MeasurementScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
