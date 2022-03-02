import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { GetDataService } from '../get-data.service';
import { Observable, interval } from 'rxjs';
export interface device {
  deivceId: string;
  deviceName: string;
  status: string;
  state: number;
  finalized: boolean;
  connected: boolean;
  dataOne: number;
  dataTwo: number;
  goodReadings: number;
}

@Component({
  selector: 'app-measurement-scale',
  templateUrl: './measurement-scale.component.html',
  styleUrls: ['./measurement-scale.component.css']
})
export class MeasurementScaleComponent implements OnInit {

  deviceData: any;
  something: any;
  data: any;
  test: any;
  constructor( private dataService: GetDataService) { }

  ngOnInit(): void {
    this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[3].device_id,
        deviceName: data[3].device_name,
        status: data[3].status,
        state: data[3].state,
        finalized: data[3].finalized,
        connected: data[3].connected,
        dataOne: Math.round(data[3].data.weight_lbs),
        dataTwo: data[3].data.bmi,
        goodReadings: data[3].data.good_readings};
      });
    interval(2000).subscribe(() => {
      this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[3].device_id,
        deviceName: data[3].device_name,
        status: data[3].status,
        state: data[3].state,
        finalized: data[3].finalized,
        connected: data[3].connected,
        dataOne: Math.round(data[3].data.weight_lbs),
        dataTwo: data[3].data.bmi,
        goodReadings: data[3].data.good_readings};
        this.colour(this.deviceData.finalized, this.deviceData.connected);
      }
    )});
    }
  colour(finalized: boolean, connected: boolean) {
    const divs = document.querySelectorAll('.scale');
    for (var i = 0; i < divs.length; i++) {
      if (finalized) {
        if (divs[i]?.classList.contains('connected')){
          divs[i]?.classList.remove('connected');}
        else if (divs[i]?.classList.contains('disconnected')){
          divs[i]?.classList.remove('disconnected');}
        if (!divs[i]?.classList.contains('finalized')) {
          divs[i]?.classList.add('finalized');
        }
      }
      else if (connected) {
        if (divs[i]?.classList.contains('finalized')){
          divs[i]?.classList.remove('finalized');}
        else if (divs[i]?.classList.contains('disconnected')){
          divs[i]?.classList.remove('disconnected');}
        if (!divs[i]?.classList.contains('connected')) {
          divs[i]?.classList.add('connected');
        }
      }
      else {
        if (divs[i]?.classList.contains('finalized')){
          divs[i]?.classList.remove('finalized');}
        else if (divs[i]?.classList.contains('connected')){
          divs[i]?.classList.remove('connected');}
        if (!divs[i]?.classList.contains('disconnected')) {
          divs[i]?.classList.add('disconnected');
        }
      }
    }


  }

}
