import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnexionPage } from '../connexion/connexion';
import { ConnexionadminPage } from '../connexionadmin/connexionadmin';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  connexion(){
    this.navCtrl.push(ConnexionPage);
  }

  connexion2(){
    this.navCtrl.push(ConnexionadminPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccueilPage');
  }

}
