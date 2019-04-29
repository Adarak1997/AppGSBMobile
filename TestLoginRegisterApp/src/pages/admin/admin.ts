import { Component} from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';

import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';



import { InscriptionPage } from '../inscription/inscription';
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

  addVisiteur(){
    this.navCtrl.push(InscriptionPage);
  }

  listeuser(){
    this.navCtrl.push(ListeuserPage);
  }

  logout(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(ConnexionPage);
    const toast = this.toastCtrl.create({
      message: 'déconnexion réussie',
      duration: 3000
    });
    toast.present();
  }
  

}
