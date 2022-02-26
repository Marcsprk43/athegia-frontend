import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { interval } from 'rxjs';
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
  selector: 'app-measurement-bp',
  templateUrl: './measurement-bp.component.html',
  styleUrls: ['./measurement-bp.component.css']
})
export class MeasurementBpComponent implements OnInit {
  deviceData: any;
  something: any;
  data: any;
  test: any;
  constructor( private dataService: GetDataService) { }

  ngOnInit(): void {
    this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[1].device_id,
        deviceName: data[1].device_name,
        status: data[1].status,
        state: data[1].state,
        finalized: data[1].finalized,
        connected: data[1].connected,
        dataOne: data[1].data.systolic,
        dataTwo: data[1].data.diastolic,
        goodReadings: data[1].data.good_readings};
        console.log(this.deviceData)
      });
    interval(500).subscribe(() => {
      this.dataService.getConfig().subscribe((data:any) => {
      this.deviceData = {
        deviceId: data[1].device_id,
        deviceName: data[1].device_name,
        status: data[1].status,
        state: data[1].state,
        finalized: data[1].finalized,
        connected: data[1].connected,
        dataOne: data[1].data.systolic,
        dataTwo: data[1].data.diastolic,
        goodReadings: data[1].data.good_readings};
        this.colour(this.deviceData.finalized, this.deviceData.connected)
      }
    )});
    }
  colour(finalized: boolean, connected: boolean) {
    const divs = document.querySelectorAll('.bp');
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
