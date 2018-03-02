import { StartPage } from './../start/start';
import { Building } from './../../models/usage1';
import { DashboardPage } from './../dashboard/dashboard';
import { Campus } from './../../models/campus';
import { BoundaryPage } from './../boundary/boundary';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { AdminpanelProvider } from '../../providers/adminpanel/adminpanel';

@IonicPage()
@Component({
  selector: 'page-marker',
  templateUrl: 'marker.html',
})
export class MarkerPage {

  zoom: number = 17;
  lat: number = 15.369650;
  lng: number = 75.123862;
  sent:string;
  title:string="";
  name:string="";
  id:number;
  bid=0;
  emailId="";
  
  Campus={
    campus_name:"",
    campus_id:0,
    emailId:"",
    markers: [ ]
  }
  paths: Array<any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private alertCtrl: AlertController,private  adminPanel:AdminpanelProvider) {
    
    //this.paths = this.navParams.get('path');
    //console.log(this.paths);
  }

  ionViewDidLoad() {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: any) {
    //console.log($event);
    let alert = this.alertCtrl.create({
      title:'Name of Building',
      inputs: [
        {
          name: 'Name',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data =>{
            //console.log(data['Name']);
            this.title = data['Name'];
            this.bid+=1;
            this.Campus.markers.push({
              lati: $event.coords.lat,
              longi: $event.coords.lng, 
              building_name: this.title,
              building_id:this.bid,
              draggable: true
            });
          }
        }
      ]
    });
    alert.present();

    /*this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });*/
    console.log(this.Campus.markers);
  }

  markerDragEnd(m: marker, $event: any) {
    console.log('dragEnd', m, $event);
  }
  

  onsubmit(){
    console.log(this.Campus);
    this.Campus.campus_name=this.name;
    this.Campus.campus_id=this.id;
    this.Campus.emailId=this.emailId;
    var len = this.Campus.markers.length;
    
    if(len <1 ){
      alert("Select Atleast one position");
    }else if(this.Campus.campus_name==""){
      alert("Please enter the campus name!!")
    }else{
      this.adminPanel.pushMarkers(this.Campus).subscribe(sent=>{
        this.sent=sent
      console.log(this.sent)
      if(this.sent=="success"){
        console.log('sent successfully')
      }
      else{
        console.log('did not send yet')
      }
      });

      this.navCtrl.push(StartPage)
      this.navCtrl.push(DashboardPage,this.Campus)
    }
    //this.router.navigateByUrl("/map");
  }
}

interface marker {
	lati: number;
	longi: number;
  building_name: string;
  building_id:number;
}
