import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(
    private lrnSDKService: LrnSDKService
  ) { }

  ngOnInit(): void {
    console.log("Initializing Data API");
    this.initDataAPI()
  }

  initDataAPI() {

  }

}
