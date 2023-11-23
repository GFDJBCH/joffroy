<?php
    require '../model/contactos.php';

    // Acceder a los valores POST
  
    $correo= $_POST["correo"];

    $contactos = new contactos();
    $datos = $contactos->contacto_revision($correo);

    // print_r($datos);
    
    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
