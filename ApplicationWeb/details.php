<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$queryDFF = $bdd->prepare('
      SELECT details_frais_forfait.id as id, details_frais_forfait.quantite as quantite,details_frais_forfait.etat_id as etat, frais_forfait.montant as montant, frais_forfait.libelle as libelle
      FROM details_frais_forfait
      INNER JOIN frais_forfait ON details_frais_forfait.frais_forfait_id = frais_forfait.id
      WHERE fiche_frais_id = :fiche_frais_id
');
$queryDFF->bindParam(':fiche_frais_id', $_GET['fiche_frais_id']);
$queryDFF->execute();
$detailsFraisForfait = $queryDFF->fetchAll();

$queryDFNF = $bdd->prepare('SELECT * FROM details_frais_non_forfait WHERE fiche_frais_id = :fiche_frais_id');
$queryDFNF->bindParam(':fiche_frais_id', $_GET['fiche_frais_id']);
$queryDFNF->execute();
$detailsFraisNonForfait = $queryDFNF->fetchAll();

$total = 0;

$retour = [
      'details_frais_forfait' => array(),
      'details_frais_non_forfait' => array()
];

for ($i=0; $i < count($detailsFraisForfait); $i++) {
      $total = $total + ($detailsFraisForfait[$i]['quantite'] * $detailsFraisForfait[$i]['montant']);
      $datas = array(
            'id' => $detailsFraisForfait[$i]['id'],
            'quantite' => $detailsFraisForfait[$i]['quantite'],
            'montant' => $detailsFraisForfait[$i]['montant'],
            'libelle' => $detailsFraisForfait[$i]['libelle'],
            'etat' => $detailsFraisForfait[$i]['etat']
      );
      array_push($retour['details_frais_forfait'], $datas);
}

for ($j=0; $j < count($detailsFraisNonForfait); $j++) {
      $total = $total + $detailsFraisNonForfait[$j]['montant'];
      $datas = array(
            'id' => $detailsFraisNonForfait[$j]['id'],
            'libelle' => $detailsFraisNonForfait[$j]['libelle'],
            'montant' => $detailsFraisNonForfait[$j]['montant'],
             'etat' => $detailsFraisNonForfait[$j]['etat_id']
      );
      array_push($retour['details_frais_non_forfait'], $datas);
}
$retour['total'] = $total;
echo json_encode($retour);