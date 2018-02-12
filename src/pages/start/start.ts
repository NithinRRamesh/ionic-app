import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage} from '../dashboard/dashboard';
import { BoundaryPage } from '../boundary/boundary';
import {MarkerPage} from '../marker/marker';

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
    
  }
  pushPage(){
      this.navCtrl.push(MarkerPage);
  }
  ionViewDidLoad() {
  }

}
