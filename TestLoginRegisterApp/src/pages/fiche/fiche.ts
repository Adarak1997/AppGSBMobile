import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FicheFrais } from '../../models/fichefrais';
import { AjoutfichePage } from '../ajoutfiche/ajoutfiche';
import { DetailsPage } from '../details/details';
import { FichefraisProvider} from '../../providers/fichefrais/fichefrais';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fiche',
  templateUrl: 'fiche.html',
})
export class FichePage {
  ficheFrais: FicheFrais[];
  anggota: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public ficheFraisProvider:FichefraisProvider, private storage: Storage) {
  

    ficheFraisProvider.getAll().subscribe((datas)=>{
      this.ficheFrais = datas as FicheFrais[];
      debugger;
    });
  }

    

  ionViewWillEnter(){
    this.storage.get('session_storage').then((datas)=>{     
      console.log(datas);
    this.storage.set('fiche', datas);
      
    });
  }

  

  ajoutfiche(){
    this.navCtrl.push(AjoutfichePage);
  }

  details(){
    
    this.ficheFraisProvider.getAll().subscribe((data) =>{
    this.storage.set('fiche', data);
    this.navCtrl.push(DetailsPage);
    console.log(data);
  });
 

  }
}
