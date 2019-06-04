//import { FicheFraisPage } from './../fiche-frais/fiche-frais';
import { Utilisateur } from './../../models/utilisateur';
import { Component } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AdminPage } from './../admin/admin';
//import { TabsPage } from './../tabs/tabs';


import { User } from '../../providers/user/user';
import { ComptePage } from '../compte/compte';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  
  utilisateur = new Utilisateur();


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController, private storage: Storage
    ) {
      
  }

  connexion() {
    this.user.login(this.utilisateur).subscribe((resp) => {
      if (this.utilisateur.pseudo == "admin" && this.utilisateur.mdp =="admin" && resp['succesAdmin']) {
        this.user.utilisateurId = resp['utilisateur_id'];
        this.user.nom = resp['nom'];
        this.user.prenom = resp['prenom'];
        this.user.pseudo = resp['pseudo'];
        this.user.role_id = resp['role_id'];
        this.navCtrl.push(AdminPage);
      }
  
      else if (this.utilisateur.role_id = 1 && resp['succes']) {
        this.user.utilisateurId = resp['utilisateur_id'];
        this.user.nom = resp['nom'];
        this.user.prenom = resp['prenom'];
        this.user.pseudo = resp['pseudo'];
        this.user.role_id = resp['role_id'];
        this.navCtrl.push(ComptePage);
          
      } 
     
    
    
      else {
        let toast = this.toastCtrl.create({
          message: 'Identifiants incorrects',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
    }, (err) => {
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Une erreur est survenue',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    });
  }
}

