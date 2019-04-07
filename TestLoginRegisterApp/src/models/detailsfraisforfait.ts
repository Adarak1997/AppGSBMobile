import { FraisForfaitises } from "./fraisforfaitises";
import { FicheFrais } from "./fichefrais";

export class DetailsFraisForfait{
    id: number;
    quantite: number;
    frais_forfait_id: FraisForfaitises;
    fiche_frais_id: FicheFrais;
}