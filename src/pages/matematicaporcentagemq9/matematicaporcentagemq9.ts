import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval';
import { Matematicaporcentagemq9gabPage } from '../matematicaporcentagemq9gab/matematicaporcentagemq9gab';

@IonicPage()
@Component({
  selector: 'page-matematicaporcentagemq9',
  templateUrl: 'matematicaporcentagemq9.html',
})
export class Matematicaporcentagemq9Page {
  timerVar;
  timerVal;
  buttonColorA: string = '#f4f4f4';
  buttonColorB: string = '#f4f4f4';
  buttonColorC: string = '#f4f4f4';
  buttonColorD: string = '#f4f4f4';
  buttonColorE: string = '#f4f4f4';
  ops;
  tempo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.startTimer()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Matematicaporcentagemq9Page');
  }
  startTimer(){
    this.timerVar = Observable.interval(1000).subscribe( x =>{
      console.log(x)
      this.timerVal = x;
    })
  }
  letraA (){
    this.buttonColorA = "#2196F3";
    this.buttonColorB = "#f4f4f4";
    this.buttonColorC = "#f4f4f4";
    this.buttonColorD = "#f4f4f4";
    this.buttonColorE = "#f4f4f4";
  }
  letraB (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#2196F3';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
  }
  letraC (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#2196F3';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
  }
  letraD (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#2196F3';
    this.buttonColorE = '#f4f4f4';
  }
  letraE (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#2196F3';
  }
  resposta (){
    if (this.buttonColorD == '#2196F3' && this.ops !== "Oops! Vamos tentar de novo" && this.ops !== "Resposta incorreta, vamos fazer outro exercício para melhorarmos!" ){ //acertou sem dica
      let alert = this.alertCtrl.create({
        title: 'Acertou',
        subTitle: 'Você acertou. Parabéns, vamos continuar assim',
        buttons: ['OK'] });
       alert.present();
    }
    else if (this.buttonColorD !== '#2196F3' && this.ops !== "Oops! Vamos tentar de novo" && this.ops !== "Resposta incorreta, vamos fazer outro exercício para melhorarmos!" ){
      let alert = this.alertCtrl.create({
        title: 'Dica',
        subTitle: 'Como olhamos no gráfico, 56% dos 14.900 estudantes entrevistados possuem celular. Então para calcularmos quantos estudantes tem telefone móvel, temos que saber quanto é 56% de 14.900',
        buttons: ['OK'] });
      alert.present();
      this.ops = "Oops! Vamos tentar de novo";
    }  //primeiro erro
    else if (this.buttonColorD == '#2196F3' && this.ops == "Oops! Vamos tentar de novo" && this.ops !== "Resposta incorreta, vamos fazer outro exercício para melhorarmos!" ){
      let alert = this.alertCtrl.create({
        title: 'Acertou',
        subTitle: 'Você acertou, mas vamos buscar melhorar',
        buttons: ['OK']});
      alert.present();}
    else if (this.buttonColorD !== '#2196F3' && this.ops == "Oops! Vamos tentar de novo" && this.ops !== "Resposta incorreta, vamos fazer outro exercício para melhorarmos!" ){
      let alert = this.alertCtrl.create({
       title: 'Resposta errada',
       subTitle: 'Não foi a resposta esperada, vamos analisar a resolução e buscarmos melhorar',
       buttons: ['OK']});
      alert.present();
      this.ops = "Resposta incorreta, vamos fazer outro exercício para melhorarmos!"; //errou com dica
      this.navCtrl.push(Matematicaporcentagemq9gabPage);
  }


  }

  }
