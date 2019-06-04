import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FraisForfaitises } from './../../models/fraisforfaitises';
import { FraisNonForfaitises } from '../../models/fraisnonforfaitises';
import { FicheFrais } from '../../models/fichefrais';

import { FichefraisProvider} from './../../providers/fichefrais/fichefrais';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  fraisForfaitises: Array<FraisForfaitises>;
  fraisNonForfaitises: Array<FraisNonForfaitises>;

  fiche: FicheFrais;

  totalFraisForfaitises: number;
  totalFraisNonForfaitises: number;

  total: number;
  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public ficheFraisProvider: FichefraisProvider ) {
  
    let fiche = navParams.data['fiche'];
    this.fiche = fiche;
    ficheFraisProvider.getDetailsById(fiche['id']).subscribe((datas) =>{
      this.fraisForfaitises = datas['details_frais_forfait'] as Array<FraisForfaitises>;
      this.fraisNonForfaitises = datas['details_frais_non_forfait'] as Array<FraisNonForfaitises>;

      this.totalFraisForfaitises = this.fraisForfaitises.length;
      this.totalFraisNonForfaitises = this.fraisNonForfaitises.length;

      this.total = datas['total'];
    });

    }

  ionViewWillEnter(){
       
      console.log('ionViewDidLoad DetailsPage');
       
  }

}
