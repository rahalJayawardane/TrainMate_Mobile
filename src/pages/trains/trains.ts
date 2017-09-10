import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Trains page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

import {DetailsPage} from '../details/details';


@Component({
  selector: 'page-trains',
  templateUrl: 'trains.html'
})
export class TrainsPage {
    
  trainDetails = DetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainsPage');
  }

}
