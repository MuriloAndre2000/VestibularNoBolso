import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtesPage } from './artes';

@NgModule({
  declarations: [
    ArtesPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtesPage),
  ],
})
export class ArtesPageModule {}
