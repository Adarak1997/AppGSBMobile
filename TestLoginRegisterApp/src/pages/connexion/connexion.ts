import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { ComptePage} from '../compte/compte';
import { AdminPage } from '../admin/admin';


/**
 * Generated class for the ConnexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})
export class ConnexionPage {

  pseudo: string;
  mdp: string;
  role_id : string = "1";
  
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

  connexion(){
    if(this.pseudo == "admin" && this.mdp == "admin"){
      let body = {
        pseudo: this.pseudo,
        mdp: this.mdp,
        role_id: this.role_id,
        aksi: 'connexion'
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

    }else if(this.pseudo != "" && this.mdp != "" && this.role_id =="1"){
      let body = {
        pseudo: this.pseudo,
        mdp: this.mdp,
        role_id: this.role_id,
        aksi: 'connexion'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(ComptePage);
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
