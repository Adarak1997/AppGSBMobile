import { Component} from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';


import { User } from './../../providers/user/user';


import { FichePage } from '../fiche/fiche';
import { ConnexionPage } from '../connexion/connexion';

import { Api } from '../../providers/api/api';

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {

  
  

  nom: string;
  prenom: string;
  pseudo: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userService: User) {
  
    this.nom = userService.nom;
    this.prenom = userService.prenom;
    this.pseudo = userService.pseudo;
    
  }

  ionViewDidLoad() {
  }
  

openFiche(){
  
  this.navCtrl.push(FichePage);
}

logout(){
  this.userService.logout();
  this.navCtrl.setRoot(ConnexionPage);
  let toast = this.toastCtrl.create({
    message: 'Vous êtes déconnecté',
    duration: 3000,
    position: 'bottom'
  });
  toast.present();
}
}
