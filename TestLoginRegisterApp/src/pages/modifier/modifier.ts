import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html',
})
export class ModifierPage {

  anggota: any;
  nom : string;
  prenom : string;
  email : string;
  date_naissance : string; 
  adresse : string;
  ville : string;
  code_postal : string;
  date_embauche : string;
  pseudo : string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('session_storage').then((res)=>{
      this.anggota = res;
      this.nom = this.anggota.nom;
      this.prenom = this.anggota.prenom;
      this.email = this.anggota.email;
      this.date_naissance = this.anggota.date_naissance;
      this.adresse = this.anggota.adresse;
      this.ville = this.anggota.ville;
      this.code_postal = this.anggota.code_postal;
      this.date_embauche = this.anggota.date_embauche;
      this.pseudo = this.anggota.pseudo;
      
    });
  }

  selectText(event) : void{
    event.target.select();
  }

  saveChange(){
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
      id: this.anggota.id,
      aksi: 'update_profile'
    };

    this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
        this.anggota.nom = this.nom;
        this.anggota.prenom = this.prenom;
        this.anggota.email = this.email;
        this.anggota.date_naissance = this.date_naissance;
        this.anggota.adresse = this.adresse;
        this.anggota.ville = this.ville;
        this.anggota.code_postal = this.code_postal;
        this.anggota.date_embauche = this.date_embauche;
        this.anggota.pseudo = this.pseudo;
        this.storage.set('session_storage', this.anggota);
        this.navCtrl.pop();
        const toast = this.toastCtrl.create({
          message: 'success update',
          duration: 3000
        });
        toast.present(); 
      });
    }
  }


