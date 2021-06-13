import { Component, OnInit } from '@angular/core';
import * as Learnosity from 'learnosity-sdk-nodejs';

@Component({
  selector: 'app-api-display',
  templateUrl: './api-display.component.html',
  styleUrls: ['./api-display.component.css']
})
export class ApiDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // initAuthor() {
  //   let authorInitOptions = `{
  //       "mode" : "item_list",
  //       "user" : {
  //           "id" : "demos-site",
  //           "firstname" : "Demos",
  //           "lastname" : "User",
  //           "email" : "demos@learnosity.com"
  //       }
  //   }`;
  //   let authorApp = window.LearnosityAuthor.init(authorInitOptions);
  // }

}
