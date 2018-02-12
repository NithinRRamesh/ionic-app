import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPageModule } from 'ionic-angular';
import { BoundaryPage } from './boundary';

@NgModule({
  declarations: [
    BoundaryPage,
  ],
  imports: [
    IonicPageModule.forChild(BoundaryPage),
    BrowserModule
  ],
})
export class BoundaryPageModule {}
