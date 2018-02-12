import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  
  
  emailUrl = 'https://aeg325m2vk.execute-api.eu-west-2.amazonaws.com/start/test'
  passwordUrl = 'https://oa8lp8cvvd.execute-api.eu-west-2.amazonaws.com/search/pass'

  constructor(public http:Http) {
    console.log('Hello LoginProvider Provider');
  }

  auth=(cred):Observable<any>=>{
    

    return this.http.post(this.passwordUrl,JSON.stringify(cred))
  
  }
}
