import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';
import { v4 as uuidv4 } from 'uuid';

declare global {
  interface Window { 
    LearnosityItems: any; 
  }
}

@Component({
  selector: 'app-api-items',
  templateUrl: './api-items.component.html',
  styleUrls: ['./api-items.component.css']
})
export class ApiItemsComponent implements OnInit {

  constructor(
    private lrnSDKService: LrnSDKService, 
    private window: Window
  ) { }

  ngOnInit(): void {
    console.log("Initializing Items API");
    this.initItemsAPI();
  }

  initItemsAPI() {
    let sessionID = uuidv4();
    let service = "items";
    let securityPacket = {
      "consumer_key": "yis0TYCu7U9V4o7M",
      "domain":       "localhost",
      "user_id":      "$ANONYMIZED_USER_ID"
    };
    let secret = "74c5fd430cf1242a527f6223aebd42d30464be22";
    let requestPacket = {
        "activity_id": "math.c2.u7",
        "name": "Math Chapter 2 – Unit 7",
        "rendering_type": "assess",
        "type": "submit_practice",
        "session_id": `${sessionID}`,
        "user_id": "aeee19fb-4e7b-435c-92f9-d93a1099988b",
        "items": [
          "Demo3",
          "Demo4",
          "accessibility_demo_6",
          "Demo6",
          "Demo7",
          "Demo8",
          "Demo9",
          "Demo10",
          "audioplayer-demo-1"
        ],
        "config": {
          "title": "Math Chapter 2 – Unit 7",
          "subtitle": "Multiplication",
          "regions": "main",
          "navigation": {
            "show_intro": true,
            "show_outro": true,
            "skip_submit_confirmation": false,
            "warning_on_change": false,
            "auto_save": {
              "save_interval_duration": 500
            },
          "annotations": "true"
          },
          "time": {
            "max_time": 1500,
            "limit_type": "soft",
            "warning_time": 120
          },
          "configuration": {
            "shuffle_items": false,
            "idle_timeout": {
              "interval": 300,
              "countdown_time": 60
            }
          }
        }
      };

    let action = "";
    let signedRequest = this.lrnSDKService.init(service, securityPacket, secret, requestPacket, action);
    this.window.LearnosityItems.init(signedRequest);

  }

}
