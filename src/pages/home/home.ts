import { Component } from '@angular/core';
import {TrainsPage} from '../trains/trains';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

        trains = TrainsPage;
        constructor(public navCtrl: NavController) {

        }
    
  


}
