import { Component} from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';

import { User } from './../../providers/user/user';


import { ListeuserPage } from '../listeuser/listeuser';
import { ConnexionPage } from '../connexion/connexion';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {



    nom: string;
    prenom: string;
    pseudo: string;
    role_id: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userService: User) {
  
    this.nom = userService.nom;
    this.prenom = userService.prenom;
    this.pseudo = userService.pseudo;
    this.role_id = userService.role_id;
  }

  
  ionViewDidLoad() {
  }

 

  listeuser(){
    this.navCtrl.push(ListeuserPage);
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
