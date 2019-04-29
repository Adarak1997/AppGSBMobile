import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the FichefraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FichefraisProvider {


  constructor(public http: HttpClient) {
    console.log('Hello FichefraisProvider Provider');
  }

  getAll(){
    return this.http.get('http://localhost/GSB/api/fiche_frais.php');
  }

  getById(idVisiteur){
    return this.http.get('http://localhost/GSB/api/fiche_frais.php?idVisiteur=' + idVisiteur);
  }

  
 

}
