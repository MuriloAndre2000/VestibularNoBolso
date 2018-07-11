import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UfuPage } from './ufu';

@NgModule({
  declarations: [
    UfuPage,
  ],
  imports: [
    IonicPageModule.forChild(UfuPage),
  ],
})
export class UfuPageModule {}
