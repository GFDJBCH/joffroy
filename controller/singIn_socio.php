<?php
    require '../model/usuario.php';
    $correo = $_GET["correo"];
    $contrasena = $_GET["contrasena"];
    $arr = [];
    $usuarios= new usuarios();
    $vlr_respuesta = $usuarios->selectView_socio($correo, $contrasena);
    header('Content-Type: application/json');
    while($row = $vlr_respuesta->fetch_assoc()){
        $arr = array(
            'id' => $row["id"],
            'socio' => $row["socio"],
            'nombre' => $row["nombre"],
            'apellidos' => $row["apellidos"],
        );
    }
    echo json_encode($arr);
