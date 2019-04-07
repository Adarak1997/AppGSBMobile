import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { AdminPage } from '../admin/admin';

/**
 * Generated class for the ConnexionadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexionadmin',
  templateUrl: 'connexionadmin.html',
})
export class ConnexionadminPage {

  pseudo: string;
  mdp: string;
  role_id : string = "3";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionadminPage');
  }

  connexion(){
    if(this.pseudo == "admin" && this.mdp == "admin" && this.role_id =="3"){
      let body = {
        pseudo: this.pseudo,
        mdp: this.mdp,
        role_id: this.role_id,
        aksi: 'connexion2'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(AdminPage);
          const toast = this.toastCtrl.create({
            message: 'connexion réussie',
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
    }else{
      const toast = this.toastCtrl.create({
        message: 'pseudo ou mot de passe incorrect',
        duration: 3000
      });
      toast.present(); 
  }
}
}
  