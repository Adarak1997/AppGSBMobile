<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
$idVisiteur = $_GET['idVisiteur'];
$query = "SELECT fiche_frais.id, fiche_frais.mois, fiche_frais.annee, fiche_frais.utilisateur_id, etat.id as etat_id, etat.libelle FROM fiche_frais inner join etat on fiche_frais.etat_id = etat.id where fiche_frais.utilisateur_id = $idVisiteur ORDER BY annee DESC, mois DESC";
$d = $bdd->query($query);
$fiches = $d->fetchAll();


$retour =[];
for($i=0; $i < count($fiches); $i++){

    $retour[$i]['id'] = $fiches[$i]['id'];
    $retour[$i]['mois'] = $fiches[$i]['mois'];
    $retour[$i]['annee'] = $fiches[$i]['annee'];
    $retour[$i]['etat'] = array(
    		'id' => $fiches[$i]['etat_id'],
    		'libelle' => $fiches[$i]['libelle']
    				
    );
    $retour[$i]['utilisateur'] = array(
    	'id' => $fiches[$i]['utilisateur_id'] 
    	
    	
    	

    );


 
    
}

echo json_encode($retour);

?>