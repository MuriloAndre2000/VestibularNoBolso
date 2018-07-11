import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Enemdia1Page } from '../enemdia1/enemdia1';
import { Enemdia2Page } from '../enemdia2/enemdia2';

@IonicPage()
@Component({
  selector: 'page-enem',
  templateUrl: 'enem.html',
})
export class EnemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnemPage');
  }
  enemdia1 (){
    this.navCtrl.push(Enemdia1Page);
  }
  enemdia2 (){
    this.navCtrl.push(Enemdia2Page);
  }


}
