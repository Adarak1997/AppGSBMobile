import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DetailsfraisforfaitProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DetailsfraisforfaitProvider Provider');
  }

  getAll(){
    return this.http.get('http://localhost/GSB/api/details_frais_forfait.php');
  }

  

}