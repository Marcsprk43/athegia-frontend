import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementBpComponent } from './measurement-bp.component';

describe('MeasurementBpComponent', () => {
  let component: MeasurementBpComponent;
  let fixture: ComponentFixture<MeasurementBpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementBpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
