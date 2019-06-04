<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);
$query = $bdd->prepare("SELECT fiche_frais.id as id, fiche_frais.mois, fiche_frais.annee, etat.id as etat_id, etat.libelle
 FROM fiche_frais
 inner join etat on fiche_frais.etat_id = etat.id
  WHERE utilisateur_id = :utilisateur  ORDER BY annee DESC, mois DESC");
$query->bindParam(':utilisateur', $_GET['utilisateur']);
$query->execute();
$fiches = $query->fetchAll();


$retour =[];
for($i=0; $i < count($fiches); $i++){

    $retour['fiche_frais'][$i]['id'] = $fiches[$i]['id'];
    $retour['fiche_frais'][$i]['mois'] = $fiches[$i]['mois'];
    $retour['fiche_frais'][$i]['annee'] = $fiches[$i]['annee'];
    $retour['fiche_frais'][$i]['etat']=array(
        'id'=> $fiches[$i]['etat_id'],
        'libelle' =>$fiches[$i]['libelle']
    );
       
}

echo json_encode($retour);

?>