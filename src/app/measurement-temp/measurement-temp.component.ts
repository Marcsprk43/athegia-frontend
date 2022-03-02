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
  selector: 'app-measurement-temp',
  templateUrl: './measurement-temp.component.html',
  styleUrls: ['./measurement-temp.component.css']
})
export class MeasurementTempComponent implements OnInit {

  deviceData: any;
  something: any;
  data: any;
  test: any;
  constructor( private dataService: GetDataService) { }

  ngOnInit(): void {
    this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[2].device_id,
        deviceName: data[2].device_name,
        status: data[2].status,
        state: data[2].state,
        finalized: data[2].finalized,
        connected: data[2].connected,
        dataOne: Math.round(data[2].data.temp_celcius),
        dataTwo: Math.round(data[2].data.temp_farenheit),
        goodReadings: data[2].data.good_readings};
        console.log(this.deviceData);
        console.log("DataTwo: ", this.deviceData.dataTwo)
      });
    interval(2000).subscribe(() => {
      this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[2].device_id,
        deviceName: data[2].device_name,
        status: data[2].status,
        state: data[2].state,
        finalized: data[2].finalized,
        connected: data[2].connected,
        dataOne: Math.round(data[2].data.temp_celcius),
        dataTwo: Math.round(data[2].data.temp_farenheit),
        goodReadings: data[2].data.good_readings};
        this.colour(this.deviceData.finalized, this.deviceData.connected)
      }
    )});
    }
  colour(finalized: boolean, connected: boolean) {
    const divs = document.querySelectorAll('.temp');
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
