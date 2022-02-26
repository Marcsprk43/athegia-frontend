import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { device } from './measurement-spo2/measurement-spo2.component';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  configUrl!: string;
  startUrl!: string;
  news: any;
  constructor(private http: HttpClient) { }

  dataService(){
  }

  getConfig() {
    this.configUrl = 'http://0.0.0.0:5000/get_data';
    this.news = this.http.get(this.configUrl);
    return this.news;
}
  start() {
    this.startUrl = 'http://0.0.0.0:5000/start_scan';
    this.news = this.http.get(this.startUrl);
  }
  }
