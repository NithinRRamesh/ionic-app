import { Http,Headers,Response} from '@angular/http';
import { Campus } from './../../models/campus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

/*
  Generated class for the AdminpanelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminpanelProvider {

  markersUrl = "https://4jasa0c4qk.execute-api.eu-west-2.amazonaws.com/z/"
  recieved:boolean=false;
  

  constructor(private http:Http) {
    console.log('Hello AdminpanelProvider Provider');
  }

  pushMarkers(campus):Observable<any>{

    return this.http.post(this.markersUrl,JSON.stringify(campus))//.map((res:Response)=>res.json())
  }

}
