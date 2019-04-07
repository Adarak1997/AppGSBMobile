import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the InscriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {

  
  nom : string = "";
  prenom : string = "";
  email : string ="";
  date_naissance : string  =""; 
  adresse : string = "";
  ville : string = "";
  code_postal : string = "";
  date_embauche : string = "";
  pseudo : string = "";
  mdp : string = "";
  confirm_mdp : string = "";
  role_id: string = "1";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }

  addRegister(){
  

    //Validation
    if(this.nom==""){
        const toast = this.toastCtrl.create({
          message: 'Le nom est requis',
          duration: 3000
        });
        toast.present();

    }else if(this.prenom==""){
        const toast = this.toastCtrl.create({
          message: 'Le prénom est requis',
          duration: 3000
        });
        toast.present();

    }else if(this.email==""){
        const toast = this.toastCtrl.create({
          message: "L'adresse mail est requise",
          duration: 3000
        });
        toast.present();

    }else if(this.date_naissance==""){
        const toast = this.toastCtrl.create({
          message: 'La date de naissance est requise',
          duration: 3000
        });
        toast.present();

    }else if(this.adresse==""){
        const toast = this.toastCtrl.create({
          message: "L'adresse est requise",
          duration: 3000
        });
        toast.present();

    }else if(this.ville==""){
        const toast = this.toastCtrl.create({
          message: 'La ville est requise',
          duration: 3000
        });
        toast.present();

    }else if(this.code_postal==""){
        const toast = this.toastCtrl.create({
          message: 'Le code postal est requis',
          duration: 3000
        });
        toast.present();

    }else if(this.date_embauche==""){
        const toast = this.toastCtrl.create({
          message: "La date d'embauche est requise",
          duration: 3000
        });
        toast.present();

    }else if(this.pseudo==""){
        const toast = this.toastCtrl.create({
          message: 'Le pseudo est requis',
          duration: 3000
        });
        toast.present();

    }else if(this.mdp==""){
        const toast = this.toastCtrl.create({
          message: 'Le mot de passe est requis',
          duration: 3000
        });
        toast.present();

    }else if(this.confirm_mdp!=this.mdp){      
        const toast = this.toastCtrl.create({
          message: 'mot de passe invalide',
          duration: 3000
        });
        toast.present();     
    }else{

    let body = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      date_naissance: this.date_naissance,
      adresse: this.adresse,
      ville: this.ville,
      code_postal: this.code_postal,
      date_embauche: this.date_embauche,
      pseudo: this.pseudo,
      mdp: this.mdp,
      role_id: this.role_id,
      aksi: 'add_register'
    };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
      var alertpesan = data.msg;
      if(data.success){
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'inscription réussie',
          duration: 3000
        });
        toast.present(); 
      }else{
        const toast = this.toastCtrl.create({
          message: alertpesan,
          duration: 3000
        });
        toast.present(); 
      }
    });

  }
}
}
