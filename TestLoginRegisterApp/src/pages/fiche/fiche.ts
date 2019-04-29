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

  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  ficheFrais: FicheFrais[];
  total: number;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public ficheFraisProvider:FichefraisProvider, private storage: Storage) {
  

    // ficheFraisProvider.getAll().subscribe((datas)=>{
    //   this.ficheFrais = datas as FicheFrais[];
    //   debugger;
    // });
      this.storage.get('session_storage').then((datas) =>{
        ficheFraisProvider.getById(datas['id']).subscribe((d)=>{
        this.ficheFrais = d as FicheFrais[];
        this.total = this.ficheFrais.length;
        console.log(d);
        debugger;
        
      });
    });
  }

  


    

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichePage');
  }
  
  refresh(){
    this.storage.get('session_storage').then((datas) =>{
      this.ficheFraisProvider.getById(datas['id']).subscribe((d)=>{
      this.ficheFrais = d as FicheFrais[];
      this.total = this.ficheFrais.length;
      
      
    });
  });
}
  

  ajoutfiche(){
    this.navCtrl.push(AjoutfichePage);
  }

  details(fiche){
    
    this.navCtrl.push('DetailsPage', { fiche: fiche });
  }
 

  }

