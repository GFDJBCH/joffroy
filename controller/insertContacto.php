<?php
    require '../model/contactos.php';

    $socio = $_GET["socio"];
    $nombre = $_GET["nombre"];
    $apellidos = $_GET["apellidos"];
    $email = $_GET["email"];
    $contrasena = $_GET["contrasena"];
    $telefono = $_GET["telefono"];
    $puesto = $_GET["puesto"];
    $activo = "sin confirmar";

    $contactos= new contactos();
    $validacion = $contactos->validarCorreo($email);

    if (!$validacion) {
        $vlr_respuesta = $contactos->insert($socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto, $activo);
        $response = [
            "status" => "ok",
            "message" => "User registered successfully."
        ];
    } else {
        $response = [
            "status" => "error",
            "message" => "The email address you entered is already associated with an existing account."
        ];
    }

    header('Content-Type: application/json');
    echo json_encode($response);
