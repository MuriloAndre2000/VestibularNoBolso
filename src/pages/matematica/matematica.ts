import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Matematicaporcentagemq1Page } from '../matematicaporcentagemq1/matematicaporcentagemq1';
import { Matematicaporcentagemq5Page } from '../matematicaporcentagemq5/matematicaporcentagemq5';


/**
 * Generated class for the MatematicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matematica',
  templateUrl: 'matematica.html',
})
export class MatematicaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatematicaPage');
  }
  porcentagem (){
  	this.navCtrl.push(Matematicaporcentagemq1Page);
  }
  porcentagem1 (){
  	this.navCtrl.push(Matematicaporcentagemq5Page);
  }

}
