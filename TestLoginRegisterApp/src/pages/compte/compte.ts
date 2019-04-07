import { Component} from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';

import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { FichePage } from '../fiche/fiche';
import { AccueilPage } from '../accueil/accueil';

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

  
  anggota: any;
  users: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage,private appCtrl: App) {
  
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.load();
      console.log(res);
      
      
    });
  }

  load(){
    let body = {
      id: this.anggota.id,
      nom: this.anggota.nom,
      prenom: this.anggota.prenom,
      email: this.anggota.email,
      date_naissance: this.anggota.date_naissance,
      adresse: this.anggota.adresse,
      ville: this.anggota.ville,
      code_postal: this.anggota.code_postal,
      date_embauche: this.anggota.date_embauche,
      pseudo: this.anggota.pseudo,
      mdp: this.anggota.mdp,
      role_id: this.anggota.role_id,
      aksi: 'profile'
    };

    this.postPvdr.postData(body,'file_aksi.php').subscribe((data)=>{
      this.users = data.profiles;
      
    });
  }

openFiche(){
  this.navCtrl.push(FichePage);
}

logout(){
  this.storage.clear();
  this.appCtrl.getRootNav().setRoot(AccueilPage);
  const toast = this.toastCtrl.create({
    message: 'déconnexion réussie',
    duration: 3000
  });
  toast.present();
}

}
