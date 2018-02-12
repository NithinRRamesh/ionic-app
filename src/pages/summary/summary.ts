import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { Campus } from '../../models/campus'
import { Building }from '../../models/usage1'
import { MapServiceProvider } from '../../providers/map-service/map-service';
/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  busy: Promise<any>;
  minDate = new Date(2017, 0, 1);
  maxDate = new Date(2020, 0, 1);
  initialDate = new Date(2017, 0, 1);
  finalDate : Date;
  selectedBuilding :string;
  buildingname: string;
  building: Building[];
  campus: Campus[];

  CampSummary: boolean;
  BuildingSummary: boolean;
  total:number=0;
  measure:string;
  convert:boolean;
  buildings = [
      {value: '1', viewValue: 'Campus'},
     // {value: '100', viewValue: 'Computer Science'},
      {value: '100', viewValue: 'Civil'}
    ];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public mapServiceProvider : MapServiceProvider,
    public alerCtrl: AlertController,) {
      this.initialDate = this.minDate;
      this.finalDate = new Date();
  }

  ionViewDidLoad() {
    let sendInitDate : Date;
    let sendFinDate : Date;
    this.measure='Litres';
    this.convert=true;
    this.BuildingSummary=false;
    this.CampSummary=true;
    this.initialDate = this.minDate;
    this.finalDate = new Date();
    sendInitDate = new Date(this.initialDate);
    sendFinDate = new Date(this.finalDate);
    this.busy = this.mapServiceProvider.getCampus(String(sendInitDate.getTime()),String(sendFinDate.getTime()))
    .then(response => this.getcamp(response));
  }
  getcamp(campus1 : Campus[]){
    this.campus=campus1['data'];
    this.total=campus1['total'];    
    return true;
  }

  fetch(){
     let sendInitDate : Date;
     let sendFinDate : Date;
     let today  = new Date();
    if(this.initialDate == null){
      this.initialDate = this.minDate;
    }
    if(this.finalDate == null){
        this.finalDate = new Date();
    }
    sendInitDate = new Date(this.initialDate);
    sendFinDate = new Date(this.finalDate);
    if(sendFinDate > today ||this.finalDate < this.initialDate){
      console.log(today);
      console.log(this.finalDate);
      let alert = this.alerCtrl.create({
        title: 'OOPS!',
        message: 'Your date-range selection is invalid',
        buttons: ['Ok']
      });
      alert.present()
      return;
    }
    if(this.selectedBuilding == null){
      this.selectedBuilding='1';
    }
    this.total=0;
    if(this.selectedBuilding == "1"){
      this.BuildingSummary=false;
      this.CampSummary=true;
      this.busy = this.mapServiceProvider.getCampus(String(sendInitDate.getTime()),String(sendFinDate.getTime()))
     .then(response => this.getcamp(response));
    }else{
      this.CampSummary=false;
      this.BuildingSummary=true;
    for(let i = 0; i < this.buildings.length ;i++){
      if(this.buildings[i].value == this.selectedBuilding){
          this.buildingname= this.buildings[i].viewValue;
      }
    }
    this.busy = this.mapServiceProvider.getUsage1( this.selectedBuilding,String(sendInitDate.getTime()),String(sendFinDate.getTime()))
    .then(build => this.getbuild(build));
  }
  }
  
  getbuild(build : Building[]){
      this.building=build['data'];
      this.total=build['total'];
     return true;
  }
  
  change(){
    if(this.measure == 'Litres'){
      this.convert=false;
      this.measure='Gallons';
    }else{
      this.convert=true;
      this.measure='Litres';
    }
  }
}
