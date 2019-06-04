import { Component} from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';

import { PostProvider } from '../../providers/post-provider';
import { User } from './../../providers/user/user';
import { Storage } from '@ionic/storage';

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

  
  
  // anggota: any;
  // users: any;

  nom: string;
  prenom: string;
  pseudo: string;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage,private appCtrl: App, public userService: User) {
  
    this.nom = userService.nom;
    this.prenom = userService.prenom;
    this.pseudo = userService.pseudo;
    
  }

  ionViewDidLoad() {
  }
  

  // ionViewWillEnter(){
  //   this.storage.get('session_storage').then((res)=>{
  //     this.anggota = res;
  //     this.load();
  //     console.log(res);
      
      
  //   });
  // }

  // load(){
  //   let body = {
  //     id: this.anggota.id,
  //     nom: this.anggota.nom,
  //     prenom: this.anggota.prenom,
  //     email: this.anggota.email,
  //     date_naissance: this.anggota.date_naissance,
  //     adresse: this.anggota.adresse,
  //     ville: this.anggota.ville,
  //     code_postal: this.anggota.code_postal,
  //     date_embauche: this.anggota.date_embauche,
  //     pseudo: this.anggota.pseudo,
  //     mdp: this.anggota.mdp,
  //     role_id: this.anggota.role_id,
  //     aksi: 'profile'
  //   };

  //   this.api.postData(body,'file_aksi.php').subscribe((data)=>{
  //     this.users = data.profiles;
      
  //   });
  // }

openFiche(){
  
  this.navCtrl.push(FichePage);
}

logout(){
  this.userService.logout();
  this.navCtrl.setRoot(ConnexionPage);

}
}
