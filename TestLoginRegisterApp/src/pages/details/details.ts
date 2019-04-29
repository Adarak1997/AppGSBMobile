import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { DetailsFraisForfait } from '../../models/detailsfraisforfait';
import { FraisNonForfaitises } from '../../models/fraisnonforfaitises';
import { FicheFrais } from '../../models/fichefrais';
import { DetailsProvider } from './../../providers/details/details';
import { Storage } from '@ionic/storage';
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
  detailsFraisForfait: DetailsFraisForfait[];
  FraisNonForfaitises: FraisNonForfaitises[];
  fiche: FicheFrais;

  totalFraisForfaitises: number;
  totalFraisNonForfaitises: number;

  total: number;

  moisLibelle = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public detailsProvider: DetailsProvider ,private storage: Storage ) {
  
  //   DetailsFraisForfaitProvider.getAll().subscribe((datas)=>{
  //    this.detailsFraisForfait = datas as DetailsFraisForfait[];
  //    debugger;
  //  });

//    this.storage.get('fiche').then((datas) =>{
//     DetailsFraisForfaitProvider.getById(datas['id']).subscribe((d)=>{
//     this.detailsFraisForfait = d as DetailsFraisForfait[];
//     debugger;
//   });
// });


  //   FraisNonForfaitProvider.getAll().subscribe((datas)=>{
  //     this.FraisNonForfaitises = datas as FraisNonForfaitises[];
      
  //   });

//   this.storage.get('fiche').then((datas) =>{
//     FraisNonForfaitProvider.getById(datas['id']).subscribe((d)=>{
//     this.FraisNonForfaitises = d as FraisNonForfaitises[];
    
//   });
// });

    let fiche = navParams.data['fiche'];
    this.fiche = fiche;
    detailsProvider.getDetailsById(fiche['id']).subscribe((datas)=>{
      this.detailsFraisForfait = datas['details_frais_forfait'] as DetailsFraisForfait[];
      this.FraisNonForfaitises = datas['details_frais_non_forfait'] as FraisNonForfaitises[];

      this.totalFraisForfaitises = this.detailsFraisForfait.length;
      this.totalFraisNonForfaitises = this.FraisNonForfaitises.length;

      this.total = datas['total'];
      debugger;
      console.log(datas);
    });
  

    }

  ionViewWillEnter(){
       
      console.log('ionViewDidLoad DetailsPage');
       
  }

}
