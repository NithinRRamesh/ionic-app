import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DetailsPage } from '../pages/details/details';
import { SummaryPage } from '../pages/summary/summary';
import { BoundaryPage } from '../pages/boundary/boundary';
import { MarkerPage } from '../pages/marker/marker';
import { StartPage } from '../pages/start/start';

import { AgmCoreModule } from '@agm/core';
import {BusyModule} from 'angular2-busy';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapServiceProvider } from '../providers/map-service/map-service';
import { AdminPanelProvider } from '../providers/admin-panel/admin-panel';
import { FormsModule } from '@angular/forms';
import { AdminpanelProvider } from '../providers/adminpanel/adminpanel';
import { LoginPage } from '../pages/login/login';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    DetailsPage,
    SummaryPage,
    BoundaryPage,
    MarkerPage,
    StartPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BusyModule,
    BrowserAnimationsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaLTJPMtdJ25RR2kGJj6HAOPsLqKy-D-g'
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    DetailsPage,
    SummaryPage,
    BoundaryPage,
    MarkerPage,
    StartPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapServiceProvider,
    AdminPanelProvider,
    AdminpanelProvider,
    LoginProvider
  ]
})
export class AppModule {}
