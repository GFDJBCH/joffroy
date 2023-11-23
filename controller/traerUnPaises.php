<?php
    require '../model/socios.php';

    // Acceder a los valores POST

    $id = $_POST["id"];
  
    $socios = new socios();
    $datos = $socios->traer_un_datos_paises($id);

    // print_r($datos);
    
    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
