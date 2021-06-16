import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import * as LearnosityModule from 'learnosity-sdk-nodejs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiDisplayComponent } from './components/api-display/api-display.component';
import { ApiItemsComponent } from './components/api-items/api-items.component';
import { ApiAuthorComponent } from './components/api-author/api-author.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApiReportsComponent } from './components/api-reports/api-reports.component';
import { ApiDataComponent } from './components/api-data/api-data.component';

// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const appRoutes: Routes = [
  { path: '', component: ApiDisplayComponent },
  { path: 'author', component: ApiAuthorComponent },
  { path: 'items', component: ApiItemsComponent },
  { path: 'reports', component: ApiReportsComponent },
  { path: 'data', component: ApiDataComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ButtonComponent,
    ApiDisplayComponent,
    ApiItemsComponent,
    ApiAuthorComponent,
    FooterComponent,
    ApiReportsComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [
    {provide: Window, useValue: window}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
