import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeuserPage } from './listeuser';

@NgModule({
  declarations: [
    ListeuserPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeuserPage),
  ],
})
export class ListeuserPageModule {}
