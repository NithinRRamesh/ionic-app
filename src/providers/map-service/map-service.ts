import { Injectable } from '@angular/core';
import { Headers,Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';

import { Observable } from 'rxjs/Rx';
import { Location } from '../../models/location';
import { Sensor } from '../../models/sensor';
import { Building} from '../../models/usage1';
import { Campus } from '../../models/campus';

/*
  Generated class for the MapServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapServiceProvider {
  private mapUrl = 'https://xfgr6efxsf.execute-api.eu-west-2.amazonaws.com/Testing/firstpage';
  private sensorUrl='https://xfgr6efxsf.execute-api.eu-west-2.amazonaws.com/Testing/sensordetails';
  private usage1url='https://w892g2q2qb.execute-api.eu-west-2.amazonaws.com/Testing/building';
  private usage2url='https://w892g2q2qb.execute-api.eu-west-2.amazonaws.com/Testing';
  
  constructor(public http: Http) {
    console.log('Hello MapServiceProvider Provider');
  }

  getMap(): Promise<Location[]>{
            return this.http.get(this.mapUrl)
            .toPromise()
            .then(response => response.json()["Items"]  as Location[])
            .catch(this.handleError)
        }
        
        private handleError(error : any) : Promise<any> {
            console.error('An error occured',error);   
            return Promise.reject(error.message | error);
        }

    getSensorDetail(id: string): Promise<Sensor[]> {
          return this.http.post(this.sensorUrl,{"building_id":id})
              .toPromise()
              .then(response => response.json()["Items"] as Sensor[])
              .catch(this.handleError);
          }
      getUsage1(id:string,from:string,to:string): Promise<Building[]>{
        return this.http.post(this.usage1url,{"build_id":id,"from":from,"to":to})
        .toPromise()
        .then(response => response.json() as Building[])
        .catch(this.handleError);
    }

    getCampus(from:string,to:string): Promise<Campus[]>{
        return this.http.post(this.usage2url,{"Campus_id":"1","from":from,"to":to})
        .toPromise()
        .then(response => response.json() as Campus[])
        .catch(this.handleError);
    }
}
