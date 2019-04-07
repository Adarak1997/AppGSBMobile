<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$postjson = json_decode(file_get_contents('php://input'), true);



if($postjson['aksi']=="add_register"){
    $mdp = md5($postjson['mdp']);
    
    $query = mysqli_query($mysqli, "INSERT INTO utilisateur SET
        nom = '$postjson[nom]',
        prenom = '$postjson[prenom]',
        email = '$postjson[email]',
        date_naissance = '$postjson[date_naissance]',
        adresse = '$postjson[adresse]',
        ville = '$postjson[ville]',
        code_postal = '$postjson[code_postal]',
        date_embauche = '$postjson[date_embauche]',
        pseudo = '$postjson[pseudo]',
        mdp = '$mdp',
        role_id = '$postjson[role_id]'
        
       
    ");


    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;

    
}



elseif($postjson['aksi']=="connexion"){
    $mdp = md5($postjson['mdp']);
    $query = mysqli_query($mysqli, "SELECT * FROM utilisateur WHERE pseudo='$postjson[pseudo]' AND mdp='$mdp'");
    $check = mysqli_num_rows($query);

    if($check>0){
        $data = mysqli_fetch_array($query);
        $datauser = array(
            'id' => $data['id'],
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'date_naissance' => $data['date_naissance'],
            'adresse' => $data['adresse'],
            'ville' => $data['ville'],
            'code_postal' => $data['code_postal'],
            'date_embauche' => $data['date_embauche'],
            'pseudo' => $data['pseudo'],
            'mdp' => $data['mdp'],
            'role_id' => $data['role_id'] 
            
            
            
        );
    
        if($query) $result = json_encode(array('success'=>true, 'result'=>$datauser));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));
    
    }else{
        $result = json_encode(array('success'=>false, 'msg'=>'compte pas enregistré'));

    }

    echo $result;
}

elseif($postjson['aksi']=="connexion2"){
    $mdp = md5($postjson['mdp']);
    $query = mysqli_query($mysqli, "SELECT * FROM utilisateur WHERE pseudo='$postjson[pseudo]' AND mdp='$mdp' AND role_id='$postjson[role_id]'");
    $check = mysqli_num_rows($query);

    if($check>0){
        $data = mysqli_fetch_array($query);
        $datauser = array(
            'id' => $data['id'],
            'nom' => $data['nom'],
            'prenom' => $data['prenom'],
            'email' => $data['email'],
            'date_naissance' => $data['date_naissance'],
            'adresse' => $data['adresse'],
            'ville' => $data['ville'],
            'code_postal' => $data['code_postal'],
            'date_embauche' => $data['date_embauche'],
            'pseudo' => $data['pseudo'],
            'mdp' => $data['mdp'],
            'role_id' => $data['role_id'] 
            
            
            
        );
    
        if($query) $result = json_encode(array('success'=>true, 'result'=>$datauser));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));
    
    }else{
        $result = json_encode(array('success'=>false, 'msg'=>'compte pas enregistré'));

    }

    echo $result;
}


elseif($postjson['aksi']=="profile"){


    $profile = array();
    $query =  mysqli_fetch_array(mysqli_query($mysqli, "SELECT * FROM utilisateur WHERE id='$postjson[id]'"));
    
    $profile[] = array(
            'id' => $query['id'],
            'nom' => $query['nom'],
            'prenom' => $query['prenom'],
            'email' => $query['email'],
            'date_naissance' => $query['date_naissance'],
            'adresse' => $query['adresse'],
            'ville' => $query['ville'],
            'code_postal' => $query['code_postal'],
            'date_embauche' => $query['date_embauche'],
            'pseudo' => $query['pseudo'],
            'mdp' => $query['mdp'],
            'role_id' => $query['role_id']


        
            
    );
    
    if($query) $result = json_encode(array('success'=>true, 'profiles'=>$profile));
    else $result = json_encode(array('success'=>false));

    echo $result;

 }
 

 

 

 

 
