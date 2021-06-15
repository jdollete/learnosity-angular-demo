import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private lrnSDKService: LrnSDKService) { }

  ngOnInit(): void {
  }

  initAuthorAPI() {
    console.log("Initializing Author API");
    let service = "author";
    let securityPacket = {
      "consumer_key": "yis0TYCu7U9V4o7M",
      "domain":       "localhost",
      "user_id":      "$ANONYMIZED_USER_ID"
    };
    let secret = "74c5fd430cf1242a527f6223aebd42d30464be22";
    let requestPacket = {
      "mode": "item_list",
      "user": {
        "id": "allain.dollete@learnosity.com"
      }
    };
    let action = "";

    let signedRequest = this.lrnSDKService.init(service, securityPacket, secret, requestPacket, action);
    console.log(signedRequest);
    
    
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
