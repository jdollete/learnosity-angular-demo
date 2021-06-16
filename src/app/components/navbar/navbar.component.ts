import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LrnSDKService } from '../../services/lrn-sdk.service';

declare global {
  interface Window { 
    LearnosityAuthor: any; 
    LearnosityItems: any;
    LearnosityReports: any;
  }
}

// window.LearnosityAuthor = window.LearnosityAuthor || {};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isExpanded: boolean = false;

  constructor(
    private lrnSDKService: LrnSDKService, 
    private window: Window
  ) { }

  ngOnInit(): void {}

}
