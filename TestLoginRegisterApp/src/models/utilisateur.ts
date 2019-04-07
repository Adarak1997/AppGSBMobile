import { Role } from "./role";

export class Utilisateur {
    id:number;
    nom:string;
    prenom:string;
    email:string;
    date_naissance:string;
    adresse:string;
    ville:string;
    code_postal:string;
    date_embauche:string;
    pseudo:string;
    mdp:string;
    role_id:Role;
}