import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-enemmodal',
  templateUrl: 'enemmodal.html',
})
export class EnemmodalPage {
  titulo = this.navParams.get('titulo');
  texto = this.navParams.get('texto');
  fonte = this.navParams.get('fonte');
  enunciado =this.navParams.get('enunciado');
  imagem = this.navParams.get('imagem');
  alternativaA = this.navParams.get('letraA');
  alternativaB = this.navParams.get('letraB');
  alternativaC = this.navParams.get('letraC');
  alternativaD = this.navParams.get('letraD');
  alternativaE = this.navParams.get('letraE');
  questao = this.navParams.get('questao');
  buttonColorA: string = '#f4f4f4';
  buttonColorB: string = '#f4f4f4';
  buttonColorC: string = '#f4f4f4';
  buttonColorD: string = '#f4f4f4';
  buttonColorE: string = '#f4f4f4';
  resposta = this.navParams.get('resposta');
  gabarito = this.navParams.get('gabarito');

  constructor(private navParams: NavParams, private view: ViewController) {
    if(this.resposta == "A")     {  this.letraA();}
    else if(this.resposta == "B"){  this.letraB();}
    else if(this.resposta == "C"){  this.letraC();}
    else if(this.resposta == "D"){  this.letraD();}
    else if(this.resposta == "E"){  this.letraE();}
  }
  dismiss(){
    const resposta = {
      respostamarcada: this.resposta
    };
    this.view.dismiss(resposta);
  }
  letraA (){
    this.buttonColorA = "#2196F3";
    this.buttonColorB = "#f4f4f4";
    this.buttonColorC = "#f4f4f4";
    this.buttonColorD = "#f4f4f4";
    this.buttonColorE = "#f4f4f4";
    this.resposta = "A";
  }
  letraB (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#2196F3';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
    this.resposta = "B";
  }
  letraC (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#2196F3';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
    this.resposta = "C";
  }
  letraD (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#2196F3';
    this.buttonColorE = '#f4f4f4';
    this.resposta = "D";
  }
  letraE (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#2196F3';
    this.resposta = "E";
  }



}
