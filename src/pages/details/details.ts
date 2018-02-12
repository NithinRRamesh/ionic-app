import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Location } from '../../models/location';
import { Sensor } from '../../models/sensor';
import { MapServiceProvider } from '../../providers/map-service/map-service';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  
  constructor(private mapService:MapServiceProvider,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }
  sensors:Sensor[];
  bldname : string = this.navParams.get('bname');

  ionViewDidLoad() {
    this.mapService.getSensorDetail(this.navParams.get('bid'))
    .then(sresult => this.sensors = sresult);
    this.presentLoading();
  }
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1500,
      dismissOnPageChange: true,
      showBackdrop:true,
    }).present();
  }

  
  closeModal() {
    
    this.viewCtrl.dismiss();
  }

}
