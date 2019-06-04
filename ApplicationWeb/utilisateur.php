<?php

header('Access-Control-Allow-Origin: *');
$host_name = 'localhost';
$database = 'appli_gsb';
$user_name = 'root';
$password = '';

$bdd = new PDO("mysql:host=$host_name; dbname=$database;", $user_name, $password);

$query = 'SELECT * From utilisateur AS u, role AS r WHERE r.id = u.role_id AND role_id != "3"';
$d = $bdd->query($query);
$user = $d->fetchAll();

$retour =[];
for($i=0; $i < count($user); $i++){
    $retour[$i]['id'] = $user[$i]['id'];
    $retour[$i]['nom'] = $user[$i]['nom'];
    $retour[$i]['prenom'] = $user[$i]['prenom'];
    $retour[$i]['email'] = $user[$i]['email'];
    $retour[$i]['tel'] = $user[$i]['tel'];
    $retour[$i]['date_naissance'] = $user[$i]['date_naissance'];
    $retour[$i]['adresse'] = $user[$i]['adresse'];
    $retour[$i]['ville'] = $user[$i]['ville'];
    $retour[$i]['tel'] = $user[$i]['tel'];
    $retour[$i]['code_postal'] = $user[$i]['code_postal'];
    $retour[$i]['date_embauche'] = $user[$i]['date_embauche'];
    $retour[$i]['pseudo'] = $user[$i]['pseudo'];
    $retour[$i]['mdp'] = $user[$i]['mdp'];
    $retour[$i]['role_id'] = array(
        'id' => $user[$i]['role_id'],
    	'libelle' => $user[$i]['libelle']
    );

    

}

echo json_encode($retour);

?>