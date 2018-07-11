import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  enunciado = this.navParams.get('texto');
  alternativaA = this.navParams.get('letraA');
  alternativaB = this.navParams.get('letraB');
  alternativaC = this.navParams.get('letraC');
  alternativaD = this.navParams.get('letraD');
  questao = this.navParams.get('questao');
  buttonColorA: string = '#f4f4f4';
  buttonColorB: string = '#f4f4f4';
  buttonColorC: string = '#f4f4f4';
  buttonColorD: string = '#f4f4f4';
  buttonColorE: string = '#f4f4f4';
  imagem = this.navParams.get('imagem');
  resposta = this.navParams.get('resposta');
  constructor(private navParams: NavParams, private view: ViewController) {
    if(this.resposta == "A"){       this.buttonColorA = "#2196F3";}
    else if(this.resposta == "B"){  this.buttonColorB = '#2196F3';}
    else if(this.resposta == "C"){  this.buttonColorC = '#2196F3';}
    else if(this.resposta == "D"){  this.buttonColorE = '#f4f4f4';}

  }

  dismiss(){
    const resposta = {
      respostamarcada: 'null'
    };
    this.view.dismiss(resposta);
  }

  letraA (){
    this.buttonColorA = "#2196F3";
    this.buttonColorB = "#f4f4f4";
    this.buttonColorC = "#f4f4f4";
    this.buttonColorD = "#f4f4f4";
    this.buttonColorE = "#f4f4f4";
    const resposta = {
      respostamarcada: 'A'
    };
    this.view.dismiss(resposta);
  }
  letraB (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#2196F3';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
    const resposta = {respostamarcada: 'B'};
    this.view.dismiss(resposta);
  }
  letraC (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#2196F3';
    this.buttonColorD = '#f4f4f4';
    this.buttonColorE = '#f4f4f4';
    const resposta = {respostamarcada: 'C'};
    this.view.dismiss(resposta);
  }
  letraD (){
    this.buttonColorA = '#f4f4f4';
    this.buttonColorB = '#f4f4f4';
    this.buttonColorC = '#f4f4f4';
    this.buttonColorD = '#2196F3';
    this.buttonColorE = '#f4f4f4';
    const resposta = {respostamarcada: 'D'};
    this.view.dismiss(resposta);
  }



}
