import { Component } from '@angular/core';
import { ModalController, Modal, ModalOptions } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ufu',
  templateUrl: 'ufu.html',
})
export class UfuPage {
  buttonquestao1: string = '#f4f4f4';
  resposta1: string = "null";
  buttonquestao2: string = '#f4f4f4';
  resposta2: string = "null";

    constructor(private modal: ModalController) {
    }

    abrirQuestao (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao = {
      texto: 'Depreende-se, da leitura de O santo e a porca, que Ariano Suassuna, ao dialogar com a tradição, retomando a comédia Aululária, de Plauto, e O avarento, de Moliére, recriandoas a partir de aspectos regionais e universais, associa',
      letraA: 'o popular ao erudito',
      letraB:'a arte renascentista ao pós-moderno',
      letraC: 'o grotesco ao sublime',
      letraD: 'o cômico ao trágico',
      resposta: 'null',
      image:''
    };

    const myModal: Modal = this.modal.create('ModalPage', questao, myModalOptions);
    myModal.present();
    myModal.onDidDismiss((resposta) => {
    console.log(resposta);
    this.resposta1 = resposta.respostamarcada;
    if(resposta.respostamarcada != 'null'){
    this.buttonquestao1 = '#2196F3';
    }
    });
    }


  abrirQuestao2(){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao = {
      texto: 'Na obra Felicidade clandestina, de Clarice Lispector, há contos em que crianças são protagonistas, ora diante de situações densas, ora leves, com suas alegrias e tristezas na relação com o outro. Nessa tessitura, o fio condutor do conto',
      letraA: 'Miopia progressiva indica a manipulação das coisas e das pessoas por parte do protagonista para garantir a sua entrada no mundo adulto',
      letraB:'Restos de Carnaval destaca o desejo da personagem menina de divertir-se como centro das atenções na festa de momo',
      letraC: 'Tentação evidencia a importância do olhar entre os protagonistas para representar a comunicação entre eles',
      letraD: 'Come, meu filho prioriza o discurso autoritário da mãe para contrapor-se ao fluxo de consciência do filho',
      resposta: 'null'
    };

    const myModal: Modal = this.modal.create('ModalPage', questao,  myModalOptions);
    myModal.present();
    myModal.onDidDismiss((resposta) => {
    console.log(resposta);
    this.resposta2 = resposta.respostamarcada;
    if(resposta.respostamarcada != 'null'){
      this.buttonquestao2 = '#2196F3';
    }
    });
    }
    verifquestao1() {
      if(this.resposta1 == "C"){
        this.buttonquestao1 = '#00FF00';
      }else if(this.resposta1 !== "C"){
        this.buttonquestao1 = '#FF0000';
      }
    }
    verifquestao2() {
      if(this.resposta2 == "A"){
        this.buttonquestao2 = '#00FF00';
      }else if(this.resposta2 !== "A"){
        this.buttonquestao2 = '#FF0000';
      }
    }
  verificar(){
    console.log(this.resposta1);
    this.verifquestao1();
    this.verifquestao2();
  }

}
