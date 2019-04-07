import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnexionadminPage } from './connexionadmin';

@NgModule({
  declarations: [
    ConnexionadminPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnexionadminPage),
  ],
})
export class ConnexionadminPageModule {}
