import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatematicaPage } from '../matematica/matematica';
import { ArtesPage } from '../artes/artes';
import { BiologiaPage } from '../biologia/biologia';
import { FilosofiaPage } from '../filosofia/filosofia';
import { FisicaPage } from '../fisica/fisica';
import { GeografiaPage } from '../geografia/geografia';
import { GramaticaPage } from '../gramatica/gramatica';
import { LiteraturaPage } from '../literatura/literatura';
import { QuimicaPage } from '../quimica/quimica';
import { SociologiaPage } from '../sociologia/sociologia';
import { LinguaestrangeiraPage } from '../linguaestrangeira/linguaestrangeira';
import { UfuPage } from '../ufu/ufu';
import { EnemPage } from '../enem/enem';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

	}
filosofia (){
  this.navCtrl.push(FilosofiaPage);
}
artes (){
  this.navCtrl.push(ArtesPage);
}
biologia (){
  this.navCtrl.push(BiologiaPage);
}
fisica (){
  this.navCtrl.push(FisicaPage);
}
geografia (){
  this.navCtrl.push(GeografiaPage);
}
gramatica (){
  this.navCtrl.push(GramaticaPage);
}
literatura (){
  this.navCtrl.push(LiteraturaPage);
}
quimica (){
  this.navCtrl.push(QuimicaPage);
}
sociologia (){
  this.navCtrl.push(SociologiaPage);
}
matematica (){
  this.navCtrl.push(MatematicaPage);
}
linguaestrangeira (){
  this.navCtrl.push(LinguaestrangeiraPage);
}
ufu (){
  this.navCtrl.push(UfuPage);
}
enem (){
  this.navCtrl.push(EnemPage);
}




}
