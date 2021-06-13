import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  initAuthorAPI() {
    console.log("Initializing Author API");
    
  }

  initItemsAPI() {
    console.log("Initializing Items API");

  }

  initReportsAPI() {
    console.log("Initializing Reports API");

  }

  initDataAPI() {
    console.log("Initializing Data API");

  }

}
