import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
  Generated class for the Apps page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class Apps {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello from other page!');
  }

}
