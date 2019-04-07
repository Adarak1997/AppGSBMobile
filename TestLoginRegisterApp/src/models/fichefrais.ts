import { Etat } from "./etat";
import { Utilisateur } from "./utilisateur";

//import { FraisNonForfaitises } from '/FraisNonForfaitises';
//import { FraisForfaitises } from '../FraisForfaitises';

export class FicheFrais{
    id: number;
    mois: number;
    annee: number;
    etat: Etat;
    utilisateur: Utilisateur;
}