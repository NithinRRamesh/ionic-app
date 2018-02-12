import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarkerPage} from '../marker/marker';

declare var google:any;
@IonicPage()
@Component({
  selector: 'page-boundary',
  templateUrl: 'boundary.html',
})
export class BoundaryPage {
  map: any;
  drawingManager: any;
  len : number=0;
  paths = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    var polygon1 = {
      draggable:true,
      editable:true,
      fillColor:"#f00"
   };

       this.map = new google.maps.Map(document.getElementById('map'), {
           center: { lat:15.369650, lng: 75.123862 },
           zoom: 17
       });

       this.drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        polygonOptions:polygon1,
        
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [ 'polygon']
        }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
     var  poly = event.overlay.getPath();
     //alert(poly.getAt(0).lat());
    
          this.len=poly.length;
             if(this.len <3){
              event.overlay.setMap(null);
              this.paths=[];
              //console.log(this.paths);
             }else{
              for (var i =0; i < poly.getLength(); i++) {
                this.paths.push({
                  lat : poly.getAt(i).lat(),
                  lng : poly.getAt(i).lng()
                });
              }
            }
    });
  }

  onsubmit(paths:Array<any>){
    if(this.len > 2){
      alert("Border mapped");
      //console.log(this.paths);
      this.navCtrl.pop();
      this.navCtrl.push(MarkerPage,{
        path: this.paths
      });
    }else{
      alert("Choose atleast 3 points");
    }
  }
}
