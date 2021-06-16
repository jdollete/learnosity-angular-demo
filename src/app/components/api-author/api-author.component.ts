import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

declare global {
  interface Window { 
    LearnosityAuthor: any; 
  }
}


@Component({
  selector: 'app-api-author',
  templateUrl: './api-author.component.html',
  styleUrls: ['./api-author.component.css']
})
export class ApiAuthorComponent implements OnInit {

  constructor(
    private lrnSDKService: LrnSDKService, 
    private window: Window) { }

  ngOnInit(): void {
    console.log("Initializing Author API");
    this.initAuthorAPI();
  }

  initAuthorAPI() {
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
    this.window.LearnosityAuthor.init(signedRequest);
    
  }

}
