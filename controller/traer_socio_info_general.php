<?php
    require '../model/socios.php';

    // Acceder a los valores POST


  
    $socios = new socios();
    $datos = $socios->traer_datos_socios_general();

    // print_r($datos);
    
    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
