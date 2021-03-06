import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilisateurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilisateurProvider {


  constructor(public http: HttpClient) {
    console.log('Hello UtilisateurProvider Provider');
  }

  getAll(){
    return this.http.get('http://localhost/AppGSBMobile/ApplicationWeb/utilisateur.php');
  }

}