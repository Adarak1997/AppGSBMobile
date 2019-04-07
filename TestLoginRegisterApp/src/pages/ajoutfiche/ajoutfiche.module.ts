import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutfichePage } from './ajoutfiche';

@NgModule({
  declarations: [
    AjoutfichePage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutfichePage),
  ],
})
export class AjoutfichePageModule {}
