import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GetDataService } from './get-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test-frames';
  constructor( private dataService: GetDataService) { }
  ngOnInit(): void {
    this.dataService.start()
  }
}
