import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  review_btn = true;
  constructor( private dataService: GetDataService) { }
  ngOnInit(): void {
    this.dataService.start()
  }
  save_data(): void{
    console.log("Clicked button")
    this.dataService.save_data()
  }
}
