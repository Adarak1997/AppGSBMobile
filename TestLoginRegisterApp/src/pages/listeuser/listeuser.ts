import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Utilisateur } from '../../models/utilisateur';
import { UtilisateurProvider} from '../../providers/utilisateur/utilisateur';
/**
 * Generated class for the ListeuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listeuser',
  templateUrl: 'listeuser.html',
})
export class ListeuserPage {
  utilisateur: Utilisateur[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public utilisateurProvider:UtilisateurProvider) {
  
    utilisateurProvider.getAll().subscribe((datas)=>{
      this.utilisateur = datas as Utilisateur[];
      debugger;
    });
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeuserPage');
  }


}
