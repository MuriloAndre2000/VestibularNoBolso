import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UfuPage } from '../pages/ufu/ufu';
import { EnemPage } from '../pages/enem/enem';
import { Enemdia1Page } from '../pages/enemdia1/enemdia1';
import { Enemdia2Page } from '../pages/enemdia2/enemdia2';
import { MatematicaPage } from '../pages/matematica/matematica';
import { Matematicaporcentagemq1Page } from '../pages/matematicaporcentagemq1/matematicaporcentagemq1'; import { Matematicaporcentagemq1gabPage } from '../pages/matematicaporcentagemq1gab/matematicaporcentagemq1gab';
import { Matematicaporcentagemq2Page } from '../pages/matematicaporcentagemq2/matematicaporcentagemq2'; import { Matematicaporcentagemq2gabPage } from '../pages/matematicaporcentagemq2gab/matematicaporcentagemq2gab';
import { Matematicaporcentagemq3Page } from '../pages/matematicaporcentagemq3/matematicaporcentagemq3'; import { Matematicaporcentagemq3gabPage } from '../pages/matematicaporcentagemq3gab/matematicaporcentagemq3gab';
import { Matematicaporcentagemq4Page } from '../pages/matematicaporcentagemq4/matematicaporcentagemq4'; import { Matematicaporcentagemq4gabPage } from '../pages/matematicaporcentagemq4gab/matematicaporcentagemq4gab';
import { Matematicaporcentagemq5Page } from '../pages/matematicaporcentagemq5/matematicaporcentagemq5'; import { Matematicaporcentagemq5gabPage } from '../pages/matematicaporcentagemq5gab/matematicaporcentagemq5gab';
import { Matematicaporcentagemq6Page } from '../pages/matematicaporcentagemq6/matematicaporcentagemq6'; import { Matematicaporcentagemq6gabPage } from '../pages/matematicaporcentagemq6gab/matematicaporcentagemq6gab';
import { Matematicaporcentagemq7Page } from '../pages/matematicaporcentagemq7/matematicaporcentagemq7'; import { Matematicaporcentagemq7gabPage } from '../pages/matematicaporcentagemq7gab/matematicaporcentagemq7gab';
import { Matematicaporcentagemq8Page } from '../pages/matematicaporcentagemq8/matematicaporcentagemq8'; import { Matematicaporcentagemq8gabPage } from '../pages/matematicaporcentagemq8gab/matematicaporcentagemq8gab';
import { Matematicaporcentagemq9Page } from '../pages/matematicaporcentagemq9/matematicaporcentagemq9'; import { Matematicaporcentagemq9gabPage } from '../pages/matematicaporcentagemq9gab/matematicaporcentagemq9gab';
import { Matematicaporcentagemq10Page } from '../pages/matematicaporcentagemq10/matematicaporcentagemq10'; import { Matematicaporcentagemq10gabPage } from '../pages/matematicaporcentagemq10gab/matematicaporcentagemq10gab';
import { Matematicaporcentagemq11Page } from '../pages/matematicaporcentagemq11/matematicaporcentagemq11'; import { Matematicaporcentagemq11gabPage } from '../pages/matematicaporcentagemq11gab/matematicaporcentagemq11gab';
import { Matematicaporcentagemq12Page } from '../pages/matematicaporcentagemq12/matematicaporcentagemq12'; import { Matematicaporcentagemq12gabPage } from '../pages/matematicaporcentagemq12gab/matematicaporcentagemq12gab';
import { ArtesPage } from '../pages/artes/artes';
import { BiologiaPage } from '../pages/biologia/biologia';
import { FilosofiaPage } from '../pages/filosofia/filosofia';
import { FisicaPage } from '../pages/fisica/fisica';
import { GeografiaPage } from '../pages/geografia/geografia';
import { GramaticaPage } from '../pages/gramatica/gramatica';
import { LiteraturaPage } from '../pages/literatura/literatura';
import { QuimicaPage } from '../pages/quimica/quimica';
import { SociologiaPage } from '../pages/sociologia/sociologia';
import { LinguaestrangeiraPage } from '../pages/linguaestrangeira/linguaestrangeira';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UfuPage,
    EnemPage,
    Enemdia1Page,
    Enemdia2Page,
    MatematicaPage, Matematicaporcentagemq1Page, Matematicaporcentagemq1gabPage, Matematicaporcentagemq2Page, Matematicaporcentagemq2gabPage, Matematicaporcentagemq3Page, Matematicaporcentagemq3gabPage, Matematicaporcentagemq4Page, Matematicaporcentagemq4gabPage, Matematicaporcentagemq5Page, Matematicaporcentagemq5gabPage, Matematicaporcentagemq6Page, Matematicaporcentagemq6gabPage, Matematicaporcentagemq7Page, Matematicaporcentagemq7gabPage, Matematicaporcentagemq8Page, Matematicaporcentagemq8gabPage, Matematicaporcentagemq9Page, Matematicaporcentagemq9gabPage, Matematicaporcentagemq10Page, Matematicaporcentagemq10gabPage, Matematicaporcentagemq11Page, Matematicaporcentagemq11gabPage, Matematicaporcentagemq12Page, Matematicaporcentagemq12gabPage,
    ArtesPage,
    BiologiaPage,
    FilosofiaPage,
    FisicaPage,
    GeografiaPage,
    GramaticaPage,
    LiteraturaPage,
    QuimicaPage,
    SociologiaPage,
    LinguaestrangeiraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UfuPage,
    EnemPage,
    Enemdia1Page,
    Enemdia2Page,
    MatematicaPage, Matematicaporcentagemq1Page, Matematicaporcentagemq1gabPage, Matematicaporcentagemq2Page, Matematicaporcentagemq2gabPage, Matematicaporcentagemq3Page, Matematicaporcentagemq3gabPage, Matematicaporcentagemq4Page, Matematicaporcentagemq4gabPage, Matematicaporcentagemq5Page, Matematicaporcentagemq5gabPage, Matematicaporcentagemq6Page, Matematicaporcentagemq6gabPage, Matematicaporcentagemq7Page, Matematicaporcentagemq7gabPage, Matematicaporcentagemq8Page, Matematicaporcentagemq8gabPage, Matematicaporcentagemq9Page, Matematicaporcentagemq9gabPage, Matematicaporcentagemq10Page, Matematicaporcentagemq10gabPage, Matematicaporcentagemq11Page, Matematicaporcentagemq11gabPage, Matematicaporcentagemq12Page, Matematicaporcentagemq12gabPage,
    ArtesPage,
    BiologiaPage,
    FilosofiaPage,
    FisicaPage,
    GeografiaPage,
    GramaticaPage,
    LiteraturaPage,
    QuimicaPage,
    SociologiaPage,
    LinguaestrangeiraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
