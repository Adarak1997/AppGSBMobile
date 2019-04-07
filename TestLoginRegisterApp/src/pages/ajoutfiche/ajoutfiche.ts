import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { FichePage } from '../fiche/fiche';
/**
 * Generated class for the AjoutfichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajoutfiche',
  templateUrl: 'ajoutfiche.html',
})
export class AjoutfichePage {

  mois : string = "";
  annee : string = "";
  etat_id : string = "1";
  utilisateur_id : string ="";
  kilometrage : number = 0;
  repas_midi : number = 0;
  relais_etape : number = 0;
  nuitee : number = 0;
  libelle : string = "";
  montant : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider,  private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjoutfichePage');
  }

  forfaitise(){

    
  
    let body = {
      mois: this.mois,
      annee: this.annee,
      etat_id: this.etat_id,
      utilisateur_id: this.utilisateur_id,
      kilometrage: this.kilometrage,
      repas_midi: this.repas_midi,
      relais_etape: this.relais_etape,
      nuitee: this.nuitee,
      aksi: 'frais'
    };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
      var alertpesan = data.msg;
      if(data.success){
        this.storage.set('session_storage', data.result);
        this.navCtrl.setRoot(FichePage);
        const toast = this.toastCtrl.create({
          message: 'fiche ajouté',
          duration: 3000
        });
        toast.present(); 
        console.log(data);

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

