<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$idFiche = $_GET['idFiche'];
$query = "SELECT details_frais_forfait.id, details_frais_forfait.quantite, frais_forfait.id as frais_forfait_id, frais_forfait.libelle, frais_forfait.montant, fiche_frais.id as fiche_frais_id, fiche_frais.mois, fiche_frais.annee, fiche_frais.etat_id, fiche_frais.utilisateur_id FROM details_frais_forfait INNER JOIN frais_forfait on details_frais_forfait.frais_forfait_id = frais_forfait.id inner join fiche_frais on details_frais_forfait.fiche_frais_id = fiche_frais.id WHERE details_frais_forfait.fiche_frais_id = $idFiche";

$d = $bdd->query($query);
$details = $d->fetchAll();

$retour =[];

for($i=0; $i < count($details); $i++){
    $retour[$i]['id'] = $details[$i]['id'];
    $retour[$i]['quantite'] = $details[$i]['quantite'];
    $retour[$i]['frais_forfait'] = array(
    	'id' => $details[$i]['frais_forfait_id'],
    	'libelle' => $details[$i]['libelle'],
    	'montant' => $details[$i]['montant']
    );
    $retour[$i]['fiche_frais'] = array(
    	'id' => $details[$i]['fiche_frais_id'],
    	'mois' => $details[$i]['mois'],
    	'annee' => $details[$i]['annee'],
    	'etat_id' => $details[$i]['etat_id'],
    	'utilisateur_id' => $details[$i]['utilisateur_id']
    );
    

}


echo json_encode($retour);

?>
