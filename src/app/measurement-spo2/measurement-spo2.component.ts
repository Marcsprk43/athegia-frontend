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
  selector: 'app-measurement-spo2',
  templateUrl: './measurement-spo2.component.html',
  styleUrls: ['./measurement-spo2.component.css']
})
export class MeasurementSpo2Component implements OnInit {
  deviceData: any;
  something: any;
  data: any;
  test: any;
  constructor( private dataService: GetDataService) { }

  ngOnInit(): void {
    this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[0].device_id,
        deviceName: data[0].device_name,
        status: data[0].status,
        state: data[0].state,
        finalized: data[0].finalized,
        connected: data[0].connected,
        dataOne: data[0].data.spo2,
        dataTwo: data[0].data.pulse,
        goodReadings: data[0].data.good_readings};
      });
    interval(2000).subscribe(() => {
      this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[0].device_id,
        deviceName: data[0].device_name,
        status: data[0].status,
        state: data[0].state,
        finalized: data[0].finalized,
        connected: data[0].connected,
        dataOne: data[0].data.spo2,
        dataTwo: data[0].data.pulse,
        goodReadings: data[0].data.good_readings};
        this.colour(this.deviceData.finalized, this.deviceData.connected);

      }
      
    )});
    }
  colour(finalized: boolean, connected: boolean) {
    const divs = document.querySelectorAll('.spo2');
    console.log("Finalized", finalized, " Connected", connected)
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
        console.log("Else")
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
