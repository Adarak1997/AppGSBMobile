import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FicheFrais } from './../../models/fichefrais';
import { AjoutfichePage } from '../ajoutfiche/ajoutfiche';
import { DetailsPage } from '../details/details';
import { FichefraisProvider} from './../../providers/fichefrais/fichefrais';
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

  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  ficheFrais: Array<FicheFrais>;
  total: number;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public ficheFraisProvider:FichefraisProvider, private storage: Storage) {
  
    ficheFraisProvider.getAll().subscribe((datas) =>{
      this.ficheFrais = datas['fiche_frais'] as Array<FicheFrais>;
      this.total = this.ficheFrais.length;
    });
    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad FichePage');
  }
  
  refresh(){
    this.ficheFraisProvider.getAll().subscribe((datas) =>{
      this.ficheFrais = datas['fiche_frais'] as Array<FicheFrais>;
      this.total = this.ficheFrais.length;
    });
}
  

  

  details(fiche){
    
    this.navCtrl.push(DetailsPage, { fiche: fiche });
  }
 

  }

