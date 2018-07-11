import { Component } from '@angular/core';
import { ModalController, Modal, ModalOptions } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-enemdia1',
  templateUrl: 'enemdia1.html',
})
export class Enemdia1Page {
  buttonquestao1: string = '#f4f4f4';
    resposta1: string = "null";
    gabarito1: string;
    respostacerta1: string;

  buttonquestao2: string = '#f4f4f4';
    resposta2: string = "null";
    gabarito2: string;
    respostacerta2: string;

  buttonquestao3: string = '#f4f4f4';
    resposta3: string = "null";
    gabarito3: string;
    respostacerta3: string;

  buttonquestao4: string = '#f4f4f4';
    resposta4: string = "null";
    gabarito4: string;
    respostacerta4: string;

  buttonquestao5: string = '#f4f4f4';
    resposta5: string = "null";
    gabarito5: string;
    respostacerta5: string;

  buttonquestao6: string = '#f4f4f4';
    resposta6: string = "null";
    gabarito6: string;
    respostacerta6: string;

  buttonquestao7: string = '#f4f4f4';
    resposta7: string = "null";
    gabarito7: string;
    respostacerta7: string;

  buttonquestao8: string = '#f4f4f4';
      resposta8: string = "null";
      gabarito8: string;
      respostacerta8: string;
  buttonquestao9: string = '#f4f4f4';
      resposta9: string = "null";
      gabarito9: string;
      respostacerta9: string;
  constructor(private modal: ModalController) {
  }
  abrirQuestao1 (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao1 = {
      questao: '1',
      titulo:'Israel Travel Guide',
      texto: 'Israel has always been a standout destination. From the days of prophets to the modern day nomad this tiny slice of land on the eastern Mediteranean has long attracted visitors. While some arrive in the ‘Holy Land’ on a spiritual quest, many others are on cultural tours, beach holidays and eco-tourism trips. Weeding through Israel’s convoluted history is both exhilarating and exhausting. There are crumbling temples, ruined cities, abandoned forts and hundreds of places associated with the Bible. And while a sense of adventure is required, most sites are safe and easily accessible. Most of all, Israel is about its incredibly diverse population. Jews come from all over the world to live here, while about 20% of the population is Muslim. Politics are hard to get away from in Israel as everyone has an opinion on how to move the country forward — with a ready ear you’re sure to hear opinions from every side of the political spectrum.',
      fonte:'Disponível em: www.worldtravelguide.net. Acesso em: 15 jun. 2012',
      enunciado:'Antes de viajar, turistas geralmente buscam informações sobre o local para onde pretendem ir. O trecho do guia de viagens de Israel',
      letraA: 'descreve a história desse local para que turistas valorizem seus costumes milenares.',
      letraB:'informa hábitos religiosos para auxiliar turistas a entenderem as diferenças culturais',
      letraC: 'divulga os principais pontos turísticos para ajudar turistas a planejarem sua viagem.',
      letraD: 'recomenda medidas de segurança para alertar turistas sobre possíveis riscos locais',
      letraE: 'apresenta aspectos gerais da cultura do país para continuar a atrair turistas estrangeiros',
      resposta: this.resposta1,
      gabarito: this.gabarito1,
      respostacerta: this.respostacerta1
    };

      const myModal: Modal = this.modal.create('EnemmodalPage', questao1, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((resposta) => {
        console.log(resposta);
        this.resposta1 = resposta.respostamarcada;
        if(resposta.respostamarcada != 'null'){
          this.buttonquestao1 = '#2196F3';
        }
      });
      }
  abrirQuestao2 (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao2 = {
      questao: '2',
      texto: "One of the things that made an incredible impression on me in the film was Frida's comfort in and celebration of her own unique beauty. She didn't try to fit into conventional ideas or images about womanhood or what makes someone or something beautiful. Instead, she fully inhabited her own unique gifts, not particularly caring what other people thought. She was magnetic and beautiful in her own right. She painted for years, not to be a commercial success or to be discovered, but to express her own inner pain, joy, family, love and culture. She absolutely and resolutely was who she was. The trueness of her own unique vision and her ability to stand firmly in  her own truth was what made her successful in the end",
      fonte:'HUTZLER, L. Disponível em: www.etbscreenwriting.com. Acesso em: 6 maio 2013.',
      enunciado:'A autora desse comentário sobre o filme Frida mostra-se impressionada com o fato de a pintora',
      letraA: 'ter uma aparência exótica.',
      letraB:'vender bem a sua imagem.',
      letraC: 'ter grande poder de sedução',
      letraD: 'assumir sua beleza singular',
      letraE: 'recriar-se por meio da pintura',
      resposta: this.resposta2,
      gabarito: this.gabarito2,
      respostacerta: this.respostacerta2
    };

      const myModal: Modal = this.modal.create('EnemmodalPage', questao2, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((resposta) => {
        console.log(resposta);
        this.resposta2 = resposta.respostamarcada;
        if(resposta.respostamarcada != 'null'){
          this.buttonquestao2 = '#2196F3';
        }
      });
    }
  abrirQuestao3 (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao3 = {
      questao: '3',
      titulo:'Letters',
      texto: "Children and Guns<br>Published: May 7, 2013<br>To the Editor: Re “Girl’s Death by Gunshot Is Rejected as Symbol” (news article, May 6):<br> I find it abhorrent that the people of Burkesville. Ky.. are not willing to learn a lesson from the tragic shooting of a 2-year-old girl by her 5-year-old brother. I am not judging their lifestyle of introducing guns to children at a young age, but I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal - guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children? I wissh the family of the victim comfort during this difficult time, but to dismiss this as a simple accident leaves open the potential for many more such “accidents” to occur. I hope this doesn’t have to happen several more times for legislators to realize that something needs to be changed. <br>EMILY LOUBATON<br>Brooklyn, May 6, 2013",
      fonte:'Disponível em: www.nytimes.com. Acesso em: 10 maio 2013',
      enunciado:'No que diz respeito à tragédia ocorrida em Burkesville, a autora da carta enviada ao The New York Times busca',
      letraA: 'reconhecer o acidente noticiado como um fato isolado.',
      letraB:'responsabilizar o irmão da vítima pelo incidente ocorrido.',
      letraC: 'apresentar versão diferente da notícia publicada pelo jornal.',
      letraD: 'expor sua indignação com a negligência de portadores de armas.',
      letraE: 'reforçar a necessidade de proibição do uso de armas por crianças.',
      resposta: this.resposta3,
      gabarito: this.gabarito3,
      respostacerta: this.respostacerta3
    };

      const myModal: Modal = this.modal.create('EnemmodalPage', questao3, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((resposta) => {
        console.log(resposta);
        this.resposta3 = resposta.respostamarcada;
        if(resposta.respostamarcada != 'null'){
          this.buttonquestao3 = '#2196F3';
        }
      });

    }
  abrirQuestao4 (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao4 = {
      questao: '4',
      texto:'<img src="assets/imgs/questao03.ing_.enem-2017.png">',
      fonte:'Reader’s Digest, set. 1993.',
      enunciado:'Nesse texto publicitário são utilizados recursos verbais e não verbais para transmitir a mensagem. Ao associar os termos anyplace e regret à imagem do texto, constata-se que o tema da propaganda é a importância da',
      letraA: 'preservação do meio ambiente.',
      letraB:'manutenção do motor.',
      letraC: 'escolha da empresa certa.',
      letraD: 'consistência do produto.',
      letraE: 'conservação do carro.',
      resposta: this.resposta4,
      gabarito: this.gabarito4,
      respostacerta: this.respostacerta4
    };

      const myModal: Modal = this.modal.create('EnemmodalPage', questao4, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((resposta) => {
        console.log(resposta);
        this.resposta4 = resposta.respostamarcada;
        if(resposta.respostamarcada != 'null'){
          this.buttonquestao4 = '#2196F3';
        }
      });
    }
  abrirQuestao5 (){
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: false
    };
    const questao5 = {
      questao: '5',
      titulo:'British Government to Recruit Teens as Next Generation of Spies',
      texto: "In the 50 years since the first James Bond movie created a lasting impression of a British secret agent, a completely different character is about to emerge. Britain’s intelligence agencies are to recruit their next generation of cyber spies by harnessing the talents of the “Xbox generation”.<br>In an expansion of a pilot program, Foreign Secretary William Hague announced Thursday that up to 100 18-year-olds will be given the chance to train for a career in Britain’s secret services. The move to recruit school-leavers marks a break with the past, when agencies mainly drew their staff from among university graduates.<br>“Young people are the key to our country’s future success, just as they were during the War”, Hague said. “Today we are not at war, but I see evidence every day of deliberate, organized attacks against intellectual property and government networks in the United Kingdom.”<br>The new recruitment program, called the Single Intelligence Account apprenticeship scheme will enable students with suitable qualifications in science, technology or engineering, to spend two years learning about communications, security and engineering through formal education, technical training and work placements.",
      fonte:'JEARY, P. Disponível em: http://worldnews.nbcnews.com. Acesso em: 19 nov. 2012.',
      enunciado:'Segundo informações veiculadas pela NBC News, a geração digital já tem seu espaço conquistado nas agências britânicas de inteligência. O governo britânico decidiu que',
      letraA: 'enfrentará a guerra vigente e deliberada contra a propriedade intelectual no Reino Unido.',
      letraB:'abandonará a política de contratação de universitários como agentes secretos.',
      letraC: 'recrutará jovens jogadores de Xbox como ciberespiões das agências de inteligência.',
      letraD: 'implantará um esquema de capacitação de adolescentes para atuarem como agentes secretos.',
      letraE: 'anunciará os nomes dos jovens a serem contratados pelas agências de inteligência.',
      resposta: this.resposta5,
      gabarito: this.gabarito5,
      respostacerta: this.respostacerta5
    };

      const myModal: Modal = this.modal.create('EnemmodalPage', questao5, myModalOptions);
      myModal.present();
      myModal.onDidDismiss((resposta) => {
      console.log(resposta);
      this.resposta5 = resposta.respostamarcada;
      if(resposta.respostamarcada != 'null'){
      this.buttonquestao5 = '#2196F3';
      }
      });
    }
  abrirQuestao6 (){
      const myModalOptions: ModalOptions = {
        enableBackdropDismiss: false
      };
      const questao6 = {
        questao: '6',
        texto: '<span style="font-size: 20px">TEXTO I</span><br><span style="font-size: 20px">Criatividade em publicidade: teorias e reflexões</span><span style="font-size: 18px">Resumo: O presente artigo aborda uma questão primordial na publicidade: a criatividade. Apesar de aclamada pelos departamentos de Criação das agências, devemos ter a consciência de que nem todo anúncio é, de fato, criativo. A partir do resgate teórico, no qual os Conceitos são tratados à luz da publicidade, busca-se estabelecer a compreensão dos temas. Para elucidar tais questões, é analisada uma campanha impressa da marca XXXX. As reflexões apontam que a publicidade criativa é essencialmente simples e apresenta uma releitura do cotidiano.</span><br> <span style="font-size: 8px; text-align: right">Depexe, S D. Travessias: Pesquisas em Educação, Cultura, Linguagem e Artes, n. 2, 2008.</span> <br> <img src="assets/imgs/questao06.ling_.enem-2017.png">',
        enunciado:'Os dois textos apresentados versam sobre o tema Criatividade. O Texto I é um resumo de Caráter Científico e o Texto II, uma homenagem promovida por um site de publicidade. De que maneira O Texto II exemplifica o conceito de criatividade em publicidade apresentado no Texto I?',
        letraA: 'Fazendo menção ao difícil trabalho das mães em criar seus filhos.',
        letraB:'Promovendo uma leitura simplista do papel materno em seu trabalho de criar os filhos.',
        letraC: 'Explorando a polissemia do termo “criação”.',
        letraD: 'Recorrendo a uma estrutura linguística simples.',
        letraE: 'Utilizando recursos gráficos diversificados.',
        resposta: this.resposta6,
        gabarito: this.gabarito6,
        respostacerta: this.respostacerta6
      };

        const myModal: Modal = this.modal.create('EnemmodalPage', questao6, myModalOptions);
        myModal.present();
        myModal.onDidDismiss((resposta) => {
        console.log(resposta);
        this.resposta6 = resposta.respostamarcada;
        if(resposta.respostamarcada != 'null'){
        this.buttonquestao6 = '#2196F3';
        }
        });
      }
  abrirQuestao7 (){
        const myModalOptions: ModalOptions = {
          enableBackdropDismiss: false
        };
        const questao7 = {
          questao: '7',
          texto: 'PROPAGANDA – O exame dos textos e mensagens de Propaganda revela que ele apresenta posições parciais, que refletem apenas o pensamento de uma minoria, como se exprimissem, em vez disso a convicção de uma população; trata-se, no fundo, de convencer o ouvinte ou leitor de que, em termos de opinião, está fora do caminho certo, e de induzi-lo a aderir às teses que lhes são apresentadas, por um mecanismo bem conhecido da psicologia social, o do conformismo induzido por pressões do grupo sobre o indivíduo isolado.',
          fonte:'BOBBIP, N.; MATTEUCCI, N.; PASQUINO, G. Dicionário de política. Brasília: UnB, 1998 (adaptado).',
          enunciado:'De acordo com o texto, as estratégias argumentativas e o uso da linguagem na produção da propaganda favorecem a',
          letraA: 'reflexão da sociedade sobre os produtos anunciados.',
          letraB:'difusão do pensamento e das preferências das grandes massas.',
          letraC: 'imposição das ideias e posições de grupos específicos.',
          letraD: 'decisão consciente do consumidor a respeito de sua compra.',
          letraE: 'identificação dos interesses do responsável pelo produto divulgado.',
          resposta: this.resposta7,
          gabarito: this.gabarito7,
          respostacerta: this.respostacerta7
        };

          const myModal: Modal = this.modal.create('EnemmodalPage', questao7, myModalOptions);
          myModal.present();
          myModal.onDidDismiss((resposta) => {
            console.log(resposta);
            this.resposta7 = resposta.respostamarcada;
            if(resposta.respostamarcada != 'null'){
              this.buttonquestao7 = '#2196F3';
            }
          });
          }
  abrirQuestao8 (){
                const myModalOptions: ModalOptions = {
                  enableBackdropDismiss: false
                };
                const questao8 = {
                  questao: '8',
                  texto: 'Sítio Gerimum <br> Este é o meu lugar (…) <br> Meu Gerimum é com g <br> Você pode ter estranhado <br> Gerimum em abundância <br> Aqui era plantado <br> E com a letra g <br> Meu lugar foi registrado.',
                  fonte:'OLIVEIRA, H. D. Língua Portuguesa, n. 88, fev. 2013 (fragmento)',
                  enunciado:'Nos versos de um menino de 12 anos, o emprego da palavra “Gerimum”grafada com a letra “g” tem por objetivo',
                  letraA: 'Valorizar usos informais caracterizadores da norma nacional.',
                  letraB:'confirmar o uso da norma-padrão em contexto da linguagem poética.',
                  letraC: 'enfatizar um processo recorrente na transformação da língua portuguesa.',
                  letraD: 'registrar a diversidade étnica e linguística presente no território brasileiro.',
                  letraE: 'reafirmar discursivamente a forte relação do falante com seu lugar de origem.',
                  resposta: this.resposta8,
                  gabarito: this.gabarito8,
                  respostacerta: this.respostacerta8
                };

                  const myModal: Modal = this.modal.create('EnemmodalPage', questao8, myModalOptions);
                  myModal.present();
                  myModal.onDidDismiss((resposta) => {
                    console.log(resposta);
                    this.resposta8 = resposta.respostamarcada;
                    if(resposta.respostamarcada != 'null'){
                      this.buttonquestao8 = '#2196F3';
                    }
                  });
                  }
  abrirQuestao9 (){
                    const myModalOptions: ModalOptions = {
                      enableBackdropDismiss: false
                    };
                    const questao9 = {
                      questao: '9',
                      titulo:'Romanos usavam redes sociais há dois mil anos, diz livro',
                      texto: "Ao tuitar ou comentar embaixo do post de um de seus vários amigos no Facebook, você provavelmente se sente privilegiado por viver em um tempo na história em que é possível alcançar de forma imediata uma vasta rede de contatos por meio de um simples clique no botão “enviar”. Você talvez também reflita sobre como as gerações passadas puderam viver sem mídias sociais, desprovidas da capacidade de verem e serem vistas, de receber, gerar e interagir com uma imensa carga de informações. Mas o que você talvez não saiba é que os seres humanos usam ferramentas de interação social há mais de dois mil anos. É o que afirma Tom Standage, autor do livro Writing on the Wall — Social Media, The first 2 000 Years (Escrevendo no mural — mídias sociais, os primeiros 2 mil anos, em tradução livre).<br> Segundo Standage, Marco Túlio Cícero, filósofo e político romano, teria sido, junto com outros membros da elite romana, precursor do uso de redes sociais. O autor relata como Cícero usava um escravo, que posteriormente tornou-se seu escriba, para redigir mensagens em rolos de papiro que eram enviados a uma espécie de rede de contatos. Estas pessoas, por sua vez, copiavam seu texto, acrescentavam seus próprios comentários e repassavam adiante. “Hoje temos computadores e banda larga, mas os romanos tinham escravos e escribas que transmitiam suas mensagens”, disse Standage à BBC Brasil. “Membros da elite romana escreviam entre si constantemente, comentando sobre as últimas movimentações políticas e expressando opiniões.”<br> Além do papiro, outra plataforma comumente utilizada pelos romanos era uma tábua de cera do tamanho e da forma de um tablet moderno, em que escreviam recados, perguntas ou transmitiam os principais pontos da acta diurna, um “jornal” exposto diariamente no Fórum de Roma. Essa tábua, o “iPad da Roma Antiga”, era levada por um mensageiro até o destinatário, que respondia embaixo da mensagem.",
                      fonte:'NIDECKER, F. Disponível em: www.bbc.co.uk. Acesso em: 7 nov. 2013 (adaptado).',
                      enunciado:'Na reportagem, há uma comparação entre tecnologias de comunicação antigas e atuais. Quanto ao gênero mensagem, identifica-se como característica que perdura ao longo dos tempos o(a)',
                      letraA: 'imediatismo das respostas.',
                      letraB:'compartilhamento de informações.',
                      letraC: 'interferência direta de outros no texto original.',
                      letraD: 'recorrência de seu uso entre membros da elite.',
                      letraE: 'perfil social dos envolvidos na troca comunicativa.',
                      resposta: this.resposta9,
                      gabarito: this.gabarito9,
                      respostacerta: this.respostacerta9
                    };

                      const myModal: Modal = this.modal.create('EnemmodalPage', questao9, myModalOptions);
                      myModal.present();
                      myModal.onDidDismiss((resposta) => {
                      console.log(resposta);
                      this.resposta9 = resposta.respostamarcada;
                      if(resposta.respostamarcada != 'null'){
                      this.buttonquestao9 = '#2196F3';
                      }
                      });
                    }


  verifquestao1 (){
    if(this.resposta1 == "E"){
      this.buttonquestao1 = '#00FF00';
    }else if(this.resposta1 !== "E"){
      this.buttonquestao1 = '#FF0000';
    }
    this.gabarito1 = "Como podemos ver no texto, o guia menciona aspectos culturais de israel para atrais turistas, mencionando: Geografia do local, eco-turimo e busca por locais descritos na bíblia.";
  }
  verifquestao2 (){
    if(this.resposta2 == "D"){
      this.buttonquestao2 = '#00FF00';
    }else if(this.resposta2 !== "D"){
      this.buttonquestao2 = '#FF0000';
    }
    this.gabarito2 = "É possível analizar no texto: One of the things that made an incredible impression on me in the film was Frida's comfort in and celebration of her own unique beauty.";
  }
  verifquestao3 (){
    if(this.resposta3 == "D"){
      this.buttonquestao3 = '#00FF00';
    }else if(this.resposta3 !== "D"){
      this.buttonquestao3 = '#FF0000';
    this.gabarito3 = "Lê-se no texto: ...I do feel that it’s irresponsible not to practice basic safety with anything potentially lethal - guns, knives, fire and so on. How can anyone justify leaving guns lying around, unlocked and possibly loaded, in a home with two young children? ";
    }
  }
  verifquestao4() {
    if(this.resposta4 == "C"){
      this.buttonquestao4 = '#00FF00';
    }else if(this.resposta4 !== "C"){
      this.buttonquestao4 = '#FF0000';
    }
   this.gabarito4 = "As palavras anyplace (qualquer lugar) e regret (arrependimento) dão a ideia de escolher uma boa empresa para trocar o óleo para não gerar arrependimentos";
  }
  verifquestao5() {
    if(this.resposta5 == "D"){
      this.buttonquestao5 = '#00FF00';
    }else if(this.resposta5 !== "D"){
      this.buttonquestao5 = '#FF0000';
    }
   this.gabarito5 = "Analisando o último parágrafo, depreende-se que o governo britânico decidiu implantar um esquema de capacitação de adolescentes para atuarem como agentes secretos";
  }
  verifquestao6() {
    if(this.resposta6 == "D"){
      this.buttonquestao6 = '#00FF00';
    }else if(this.resposta6 !== "D"){
      this.buttonquestao6 = '#FF0000';
    }
   this.gabarito6 = 'Os dois textos falam sobre criatividade, entretanto, o texto II apresenta uma particularidade “13 de maio – Dia das Mães”. A polissemia da palavra "criação" é usada no anúncio associando a ideia de criar(criatividade) em propaganda à ideia de criar filhos';
  }
  verifquestao7() {
    if(this.resposta7 == "C"){
      this.buttonquestao7 = '#00FF00';
    }else if(this.resposta7 !== "C"){
      this.buttonquestao7 = '#FF0000';
    }
   this.gabarito7 = 'Como apresentado no texto, a propaganda usa argumentação para influenciar os consumidores';
  }
  verifquestao8() {
    if(this.resposta8 == "E"){
      this.buttonquestao8 = '#00FF00';
    }else if(this.resposta8 !== "E"){
      this.buttonquestao8 = '#FF0000';
    }
   this.gabarito8 = 'O poema utiliza o termo “gerimum” com “g”, porém nos dicionários, jerimun é grafado com "j", o autor usa "gerimum" para se afirmar com a relação do lugar dele';
  }
  verifquestao9() {
    if(this.resposta9 == "B"){
      this.buttonquestao9 = '#00FF00';
    }else if(this.resposta9 !== "B"){
      this.buttonquestao9 = '#FF0000';
    }
   this.gabarito9 = 'O gênero textual mensagem tem como característica transmitir informações de forma objetiva, tanto antigamente quanto atualmente.';
  }




verificar(){
  this.verifquestao1();
  this.verifquestao2();
  this.verifquestao3();
  this.verifquestao4();
  this.verifquestao5();
  this.verifquestao6();
  this.verifquestao7();
  this.verifquestao8();
  this.verifquestao9();


}
}
