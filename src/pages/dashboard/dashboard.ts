import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController  } from 'ionic-angular';
import { Location } from '../../models/location';
import { MapServiceProvider } from '../../providers/map-service/map-service';
import { ModalController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Sensor } from '../../models/sensor';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardPage {
  markers:Location[]=this.navParams.get('markers');
  zoom : number=16;
  lat: number = 15.369650;
  lng: number =  75.123862;
  rad:number=24;
  opac:number=0.6;
  minz:number=18;
  maxz:number=16;
  sensors:Sensor[];
  //points for polygon
  paths: Array<any> = [
        { lat: 15.370791,  lng:  75.118364 },
        { lat: 15.371265,  lng:  75.120346 },
        { lat: 15.370965,  lng: 75.121456 },
        { lat: 15.370955,  lng:  75.123645 },
        { lat: 15.36827,   lng: 75.127292 },
        { lat: 15.367458,  lng: 75.127099 },
        { lat: 15.368177,  lng: 75.123903 },
        { lat:15.367866,   lng: 75.122482 },
        { lat:15.367740,   lng:75.121240 },
  ]
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, 
    public navParams: NavParams,private mapService:MapServiceProvider,private viewCtrl: ViewController) {}

  ionViewDidLoad() {   
    this.viewCtrl.showBackButton(false);
    //this.mapService.getMap()
    //.then(mresult => this.markers = mresult); 
  }

  openModal(m:Location) { 
    //console.log(this.markers)
    let obj = {bid: m.building_id,bname: m.building_name};
    let myModal = this.modalCtrl.create(DetailsPage,obj);
    myModal.present();
  }

}
