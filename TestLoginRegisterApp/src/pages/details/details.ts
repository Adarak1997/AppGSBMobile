import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { DetailsFraisForfait } from '../../models/detailsfraisforfait';
import { DetailsfraisforfaitProvider} from '../../providers/detailsfraisforfait/detailsfraisforfait';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public DetailsFraisForfaitProvider:DetailsfraisforfaitProvider, private storage: Storage ) {
  
    DetailsFraisForfaitProvider.getAll().subscribe((datas)=>{
      this.detailsFraisForfait = datas as DetailsFraisForfait[];
      debugger;
    });
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{     
      console.log(res);
       
      
    });

    this.storage.get('fiche').then((data)=>{     
      console.log(data);

    });
    
    
  }

}
