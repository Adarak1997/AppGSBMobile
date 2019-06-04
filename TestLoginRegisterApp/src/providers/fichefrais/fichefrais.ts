import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Api } from './../api/api';
import { User } from './../user/user';
import { FicheFrais } from './../../models/fichefrais';

/*
  Generated class for the FichefraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FichefraisProvider {


  constructor(public api: Api, public userService: User) {
    console.log('Hello FichefraisProvider Provider');
  }

  getAll(){
    return this.api.get('fiche_frais.php?utilisateur=' + this.userService.utilisateurId);
  }

  getDetailsById(id: string) {
    return this.api.get('details.php?fiche_frais_id=' + id);
  }
}
