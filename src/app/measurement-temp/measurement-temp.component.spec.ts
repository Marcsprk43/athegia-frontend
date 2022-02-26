import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementTempComponent } from './measurement-temp.component';

describe('MeasurementTempComponent', () => {
  let component: MeasurementTempComponent;
  let fixture: ComponentFixture<MeasurementTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
