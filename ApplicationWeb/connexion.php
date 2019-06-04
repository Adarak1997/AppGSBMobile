<?php
header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$query = $bdd->prepare('SELECT id, nom, prenom, pseudo, role_id FROM utilisateur WHERE pseudo = :pseudo AND mdp = :mdp;');
$query->bindParam(':pseudo', $_POST['pseudo']);
$mdp = md5($_POST['mdp']);
$query->bindParam(':mdp', $mdp);
$query->execute();
$utilisateur = $query->fetch();

$retour = [];
if ($utilisateur['id'] != null && $utilisateur['role_id'] = 1) {
      $retour['succes'] = true;
      $retour['utilisateur_id'] = $utilisateur['id'];
      $retour['nom'] = $utilisateur['nom'];
      $retour['prenom'] = $utilisateur['prenom'];
      $retour['pseudo'] = $utilisateur['pseudo'];
	$retour['role_id'] = $utilisateur['role_id'];
}
if ($utilisateur['id'] != null && $utilisateur['role_id'] = 3){
	$retour['succesAdmin'] = true;
      $retour['utilisateur_id'] = $utilisateur['id'];
      $retour['nom'] = $utilisateur['nom'];
      $retour['prenom'] = $utilisateur['prenom'];
      $retour['pseudo'] = $utilisateur['pseudo'];
	$retour['role_id'] = $utilisateur['role_id'];
}else {
$retour['succes'] = false;
}


     


echo json_encode($retour);
