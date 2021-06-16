import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

declare global {
  interface Window { 
    LearnosityReports: any; 
  }
}

@Component({
  selector: 'app-api-reports',
  templateUrl: './api-reports.component.html',
  styleUrls: ['./api-reports.component.css']
})
export class ApiReportsComponent implements OnInit {

  constructor(
    private lrnSDKService: LrnSDKService, 
    private window: Window
  ) { }

  ngOnInit(): void {
    console.log("Initializing Reports API");
    this.initReportsAPI();
  }

  initReportsAPI() {
    let service = "reports";
    let securityPacket = {
      "consumer_key": "yis0TYCu7U9V4o7M",
      "domain":       "localhost",
      "user_id":      "$ANONYMIZED_USER_ID"
    };
    let secret = "74c5fd430cf1242a527f6223aebd42d30464be22";
    let requestPacket = {
      "reports": [{
        "id": "response-analysis-report",
        "type": "response-analysis-by-item",
        "session_ids": [
          "c8df0f45-2bfd-4d6c-9de1-20200224c001",
          "c8df0f45-2bfd-4d6c-9de1-20200224c002",
          "c8df0f45-2bfd-4d6c-9de1-20200224c003",
          "c8df0f45-2bfd-4d6c-9de1-20200224c004",
          "c8df0f45-2bfd-4d6c-9de1-20200224c005",
          "c8df0f45-2bfd-4d6c-9de1-20200224c006",
          "c8df0f45-2bfd-4d6c-9de1-20200224c007",
          "c8df0f45-2bfd-4d6c-9de1-20200224c008",
          "c8df0f45-2bfd-4d6c-9de1-20200224c009",
          "c8df0f45-2bfd-4d6c-9de1-20200224c010",
          "c8df0f45-2bfd-4d6c-9de1-20200224c011"
        ],
        "users": [{
            "id": "user_20200224a_00001",
            "name": "Milhouse Vanhouten"
          },
          {
            "id": "user_20200224c_00002",
            "name": "Bart Simpson"
          },
          {
            "id": "user_20200224c_00003",
            "name": "Sherri Mackleberry"
          },
          {
            "id": "user_20200224c_00004",
            "name": "Nelson Muntz"
          },
          {
            "id": "user_20200224c_00005",
            "name": "Terri Mackleberry"
          },
          {
            "id": "user_20200224c_00006",
            "name": "Lewis Clark"
          },
          {
            "id": "user_20200224c_00007",
            "name": "Adrian Belew"
          },
          {
            "id": "user_20200224c_00008",
            "name": "Martin Prince"
          },
          {
            "id": "user_20200224c_00009",
            "name": "Wendell Borton"
          },
          {
            "id": "user_20200224c_00010",
            "name": "Nina Skalka"
          },
          {
            "id": "user_20200224c_00011",
            "name": "Sophie Jensen"
          }
        ],
        "item_reference_map": [{
            "reference": "20200224_responseAnalysis_i01",
            "name": "Item 1"
          },
          {
            "reference": "20200224_responseAnalysis_i02",
            "name": "Item 2"
          },
          {
            "reference": "20200224_responseAnalysis_i03",
            "name": "Item 3"
          },
          {
            "reference": "20200224_responseAnalysis_i04",
            "name": "Item 4"
          },
          {
            "reference": "20200224_responseAnalysis_i05",
            "name": "Item 5"
          },
          {
            "reference": "20200224_responseAnalysis_i06",
            "name": "Item 6"
          },
          {
            "reference": "20200224_responseAnalysis_i07",
            "name": "Item 7"
          },
          {
            "reference": "20200224_responseAnalysis_i08",
            "name": "Item 8"
          },
          {
            "reference": "20200224_responseAnalysis_i09",
            "name": "Item 9"
          },
          {
            "reference": "20200224_responseAnalysis_i10",
            "name": "Item 10"
          }
        ]
      }]
    };

    let action = "";
    let signedRequest = this.lrnSDKService.init(service, securityPacket, secret, requestPacket, action);
    this.window.LearnosityReports.init(signedRequest);

  }

}
