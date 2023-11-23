<?php
    require '../model/contacto.php';
    $correo= $_POST["correo"];

    $contactos = new Contacto();
    $datos = $contactos->verificar_correo($correo);

    if ($datos) {
        $validarCorreo = $contactos->confirmar_correo($correo);
        if ($validarCorreo) {
            $response = 1;
        } else {
            $response = 2;
        }
    } else {
        $datos = $contactos->reverificar_correo($correo);
        if ($datos) {
            $response = 2;
        } else {
            $response = 3;
        }
    }

    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($response);
