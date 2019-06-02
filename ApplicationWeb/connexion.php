<?php

header('Access-Control-Allow-Origin: *');

$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$query = $bdd->prepare('SELECT id, nom, prenom, pseudo FROM utilisateur  WHERE pseudo = :pseudo AND mdp = :mdp;');

$query->bindParam(':pseudo', $_POST['pseudo']);
$query->bindParam(':mdp', $_POST['mdp']);
$query->execute();
$utilisateur = $query->fetch();

$retour = [];
if ($utilisateur['id'] != null) {
      $retour['success'] = true;
      $retour['utilisateur_id'] = $utilisateur['id'];
      $retour['nom'] = $utilisateur['nom'];
      $retour['prenom'] = $utilisateur['prenom'];
      $retour['pseudo'] = $utilisateur['pseudo'];

}else{
      $retour['success'] = false;
}
echo json_encode($retour);