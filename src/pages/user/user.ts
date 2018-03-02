import { DashboardPage } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  email;
  password:string;
  zoom : number=18;
  lat: number = 15.369650;
  lng: number =  75.123862;
  rad:number=24;
  opac:number=0.6;
  minz:number=18;
  maxz:number=16;

  markers=[{lat:15.369650,lon:75.123862,water_status:0}]


  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: this.email+this.password,
      duration: 3000,
      position:'bottom'   
    });
    toast.present();

    //this.navCtrl.pop()
    this.navCtrl.push(DashboardPage)
  }

}
