<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$idFiche = $_GET['idFiche'];
$query = "SELECT * FROM details_frais_non_forfait, fiche_frais 
WHERE details_frais_non_forfait.fiche_frais_id = fiche_frais.id AND details_frais_non_forfait.fiche_frais_id = $idFiche";

$d = $bdd->query($query);
$detailsnon = $d->fetchAll();

$retour =[];

for($i=0; $i < count($detailsnon); $i++){
    $retour[$i]['id'] = $detailsnon[$i]['id'];
    $retour[$i]['libelle'] = $detailsnon[$i]['libelle'];
    $retour[$i]['montant'] = $detailsnon[$i]['montant'];
    $retour[$i]['fiche_frais'] = array(
    	'id' => $detailsnon[$i]['fiche_frais_id'],
    	'mois' => $detailsnon[$i]['mois'],
    	'annee' => $detailsnon[$i]['annee'],
    	'etat_id' => $detailsnon[$i]['etat_id'],
    	'utilisateur_id' => $detailsnon[$i]['utilisateur_id']
    );
    

}

echo json_encode($retour);

?>
