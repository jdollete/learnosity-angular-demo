import { Component, OnInit } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

@Component({
  selector: 'app-api-author',
  templateUrl: './api-author.component.html',
  styleUrls: ['./api-author.component.css']
})
export class ApiAuthorComponent implements OnInit {

  constructor(private lrnSDKService: LrnSDKService) { }

  ngOnInit(): void {
  }

}
