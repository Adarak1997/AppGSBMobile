import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';


import { Utilisateur } from '../../models/utilisateur';

@Injectable()
export class User {
  utilisateurId: number;
  nom: string;
  prenom: string;
  pseudo: string;

  constructor(public http: HttpClient) { }

  login(utilisateur: Utilisateur) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('pseudo', utilisateur.pseudo);
    httpParams = httpParams.append('mdp', utilisateur.mdp);
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    
    return this.http.post('http://localhost/GSB/api/details.php', httpParams, options);
  }

}
