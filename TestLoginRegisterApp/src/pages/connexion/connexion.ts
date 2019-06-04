import { Utilisateur } from './../../models/utilisateur';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AdminPage } from './../admin/admin';


import { User } from '../../providers/user/user';
import { ComptePage } from '../compte/compte';


@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html'
})
export class ConnexionPage {
  
  utilisateur = new Utilisateur();


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController
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
        this.navCtrl.setRoot(AdminPage);
        let toast = this.toastCtrl.create({
          message: 'Connexion réussi',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
  
      else if (this.utilisateur.role_id = 1 && resp['succes']) {
        this.user.utilisateurId = resp['utilisateur_id'];
        this.user.nom = resp['nom'];
        this.user.prenom = resp['prenom'];
        this.user.pseudo = resp['pseudo'];
        this.user.role_id = resp['role_id'];
        this.navCtrl.setRoot(ComptePage);
        let toast = this.toastCtrl.create({
          message: 'Connexion réussi',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
          
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

