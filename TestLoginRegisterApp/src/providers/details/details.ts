import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FicheFrais } from './../../models/fichefrais';


@Injectable()
export class DetailsProvider {
 
  
  
 


  constructor(public http: HttpClient) {
    console.log('Hello DetailsProvider Provider');
  }

  getDetailsById(id){
      return this.http.get('http://localhost/GSB/api/details.php?fiche_frais_id=' + id);
  }
}