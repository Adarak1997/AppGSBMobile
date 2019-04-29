import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FraisnonforfaitProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FraisnonforfaitProvider Provider');
  }

  getAll(){
    return this.http.get('http://localhost/GSB/api/details_frais_non_forfait.php');
  }

  getById(idFiche){
    return this.http.get('http://localhost/GSB/api/details_frais_non_forfait.php?idFiche=' + idFiche);
  }

}