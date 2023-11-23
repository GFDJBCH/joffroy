<?php
    require '../model/usuario.php';

    $id = $_GET["id"];
    $nombre = $_GET["nombre"];
    $apellidos = $_GET["apellidos"];
    $correo = $_GET["correo"];
    $contrasena = $_GET["contrasena"];
    $id_puesto = $_GET["id_puesto"];
    $puesto = $_GET["puesto"];
    $fch_creacion = $_GET["fch_creacion"];
    $estado = $_GET["estado"];

    //$id = '';
    //$nombre = '';
    //$apellidos = '';
    //$correo = 'test@joffroy.com';
    //$contrasena = 'j0ffr0y/';
    //$id_puesto = '';
    //$puesto = '';
    //$fch_creacion = '';
    //$estado = '';

    $arr;
    $usuarios= new usuarios();
    $vlr_respuesta = $usuarios->selectView($id, $nombre, $apellidos, $correo, $contrasena, $id_puesto, $puesto, $fch_creacion, $estado);

    header('Content-Type: application/json');
    
    while($row = $vlr_respuesta->fetch_assoc()){
        $arr = array(
            'id' => $row["id"],
            'nombre' => $row["nombre"],
            'apellidos' => $row["apellidos"],
            'correo' => $row["correo"],
            'contrasena' => $row["contrasena"],
            'id_puesto' => $row["id_puesto"],
            'puesto' => $row["puesto"],
            'fch_creacion' => $row["fch_creacion"],
            'estado' => $row["estado"]
        );
    }

    echo json_encode($arr, JSON_FORCE_OBJECT);
?>