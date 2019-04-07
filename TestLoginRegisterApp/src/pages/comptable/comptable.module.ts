import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComptablePage } from './comptable';

@NgModule({
  declarations: [
    ComptablePage,
  ],
  imports: [
    IonicPageModule.forChild(ComptablePage),
  ],
})
export class ComptablePageModule {}
