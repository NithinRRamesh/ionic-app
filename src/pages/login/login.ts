import { ToastController } from 'ionic-angular';
import { StartPage } from './../start/start';
import { Observable } from 'rxjs/Rx';
import { LoginProvider } from './../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  auth={
    email:"",
    password:""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private login:LoginProvider,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  sub(){
    let auth
    this.login.auth(this.auth)
    .toPromise()
    .then(response => {auth = response.json()

    console.log(auth)
    if(auth==1){
      this.navCtrl.setRoot(StartPage)
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Invalid user email or password',
        duration: 2000,
        position: 'bottom'
      });
  
      toast.present(toast);
    }
  }
  
  )
     
    /*subscribe(canEnter=>{

      console.log(canEnter)
      if(canEnter.body==="1"){
        this.navCtrl.setRoot(StartPage)
      }
    })*/

    console.log(this.auth)
  }
}
